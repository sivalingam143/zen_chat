import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowCircleRight } from "react-icons/fa";
import { TextInputForm } from "../components/Forms";
import categoryData from "./data";
import "./Chat.css";

// Utility function to generate unique ID
const generateUniqueId = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

const Chat = ({ setChatHistory, chatHistory }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [displayedBotMessage, setDisplayedBotMessage] = useState("");
  const [pendingBotMessage, setPendingBotMessage] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [loadingChatId, setLoadingChatId] = useState(null);
  const [isFirstMessage, setIsFirstMessage] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);

  // Initialize chat if it doesn't exist
  useEffect(() => {
    const currentChat = chatHistory.find((chat) => chat.id === id);
    if (currentChat && currentChat.messages) {
      setMessages(currentChat.messages);
      setIsFirstMessage(currentChat.messages.length === 0);
    } else if (id === "new") {
      const newId = generateUniqueId();
      const newChat = { id: newId, title: "New Chat", messages: [] };
      setChatHistory((prev) => {
        const updatedHistory = [newChat, ...prev];
        localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
        return updatedHistory;
      });
      navigate(`/chat/${newId}`, { replace: true });
      setMessages([]);
      setIsFirstMessage(true);
    } else {
      navigate("/chat/new", { replace: true });
    }
  }, [id, chatHistory, navigate, setChatHistory]);

  // Find best match for user message (used for bot response)
  const findBestMatch = (userMessage) => {
    const userMessageClean = userMessage.toLowerCase().trim();
    for (const category in categoryData) {
      if (categoryData[category].data) {
        for (const qa of categoryData[category].data) {
          const qaClean = qa.question.toLowerCase().trim();
          if (userMessageClean === qaClean) {
            return { match: qa, category };
          }
        }
      }
    }
    return { match: null, category: null };
  };

  const generateSuggestions = (input) => {
    if (!input.trim()) {
      setSuggestions([]);
      return;
    }
    const inputClean = input.toLowerCase().trim();
    const filteredSuggestions = [];
    for (const category in categoryData) {
      if (categoryData[category].data) {
        categoryData[category].data.forEach((qa) => {
          if (qa.question.toLowerCase().includes(inputClean)) {
            filteredSuggestions.push(qa.question);
          }
        });
      }
    }
    // Limit to top 5 suggestions and remove duplicates
    setSuggestions([...new Set(filteredSuggestions)].slice(0, 5));
  };

  // Handle input change to update suggestions
  const handleInputChange = (e) => {
    const value = e.target.value;
    setMessage(value);
    generateSuggestions(value);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setMessage(suggestion);
    setSuggestions([]); // Clear suggestions
    inputRef.current.focus(); // Refocus input
  };

  // Generate chat title based on message
  const generateTitleFromMessage = (userMessage, matched) => {
    if (matched.match) {
      const snippet =
        matched.match.answer.split(".")[0].substring(0, 30) +
        (matched.match.answer.length > 30 ? "..." : "");
      return `${
        matched.category.charAt(0).toUpperCase() + matched.category.slice(1)
      }: ${snippet}`;
    } else {
      if (
        userMessage.toLowerCase().includes("hi") ||
        userMessage.toLowerCase().includes("hello")
      ) {
        return "Casual Conversation Starter";
      }
      return userMessage.trim().substring(0, 50) || "General Chat";
    }
  };

  // Handle sending a message
  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = { text: message, sender: "user" };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setSuggestions([]); // Clear suggestions on send

    let newChatId = id;
    setChatHistory((prev) => {
      let updatedHistory = [...prev];
      const currentChatIndex = updatedHistory.findIndex(
        (chat) => chat.id === id
      );

      if (currentChatIndex === -1) {
        newChatId = generateUniqueId();
        const matched = findBestMatch(message);
        const newTitle = generateTitleFromMessage(message, matched);
        const newChat = {
          id: newChatId,
          title: newTitle,
          messages: [userMessage],
        };
        updatedHistory = [newChat, ...updatedHistory];
        navigate(`/chat/${newChatId}`, { replace: true });
        setIsFirstMessage(false);
      } else {
        const matched = findBestMatch(message);
        const newTitle = isFirstMessage
          ? generateTitleFromMessage(message, matched)
          : updatedHistory[currentChatIndex].title;
        updatedHistory[currentChatIndex] = {
          ...updatedHistory[currentChatIndex],
          title: newTitle,
          messages: updatedMessages,
        };
        setIsFirstMessage(false);
      }

      localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
      return updatedHistory;
    });

    setMessage("");

    setLoadingChatId(newChatId);
    setTimeout(() => {
      const matched = findBestMatch(message);
      const botResponse = matched.match
        ? matched.match.answer
        : `Hmm, I don't have a specific answer for "${message}", but I'm happy to help! Could you clarify or ask something else?`;
      setPendingBotMessage({
        text: botResponse,
        sender: "bot",
        chatId: newChatId,
      });
      setLoadingChatId(null);
      setDisplayedBotMessage("");
      setIsTyping(true);
    }, 2000);
  };

  // Typing effect for bot response
  useEffect(() => {
    if (isTyping && pendingBotMessage && pendingBotMessage.chatId === id) {
      const fullText = pendingBotMessage.text;
      let currentIndex = displayedBotMessage.length;

      if (currentIndex < fullText.length) {
        const timer = setTimeout(() => {
          setDisplayedBotMessage(fullText.slice(0, currentIndex + 1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setMessages((prev) => [...prev, pendingBotMessage]);
        setChatHistory((prev) => {
          const updatedHistory = prev.map((chat) =>
            chat.id === id
              ? { ...chat, messages: [...chat.messages, pendingBotMessage] }
              : chat
          );
          localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
          return updatedHistory;
        });
        setIsTyping(false);
        setPendingBotMessage(null);
        setDisplayedBotMessage("");
      }
    }
  }, [isTyping, displayedBotMessage, pendingBotMessage, id, setChatHistory]);

  return (
    <Container fluid className="position-relative main-content">
      <Row className="chat-container">
        <Col>
          <div className="chat-area">
            {messages.length === 0 &&
            loadingChatId !== id &&
            !(pendingBotMessage && pendingBotMessage.chatId === id) ? (
              <div className="chat-placeholder">
                Chat messages would be here
              </div>
            ) : (
              <div className="chat-messages">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`message ${
                      msg.sender === "user" ? "user-message" : "bot-message"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
                {loadingChatId === id && (
                  <div className="message bot-message loading">
                    Loading<span className="loading-dots">...</span>
                  </div>
                )}
                {isTyping &&
                  pendingBotMessage &&
                  pendingBotMessage.chatId === id && (
                    <div className="message bot-message">
                      {displayedBotMessage || "..."}
                    </div>
                  )}
              </div>
            )}
          </div>
        </Col>
      </Row>
      <Row className="search-bar">
        <Col>
          <div className="suggestion-container">
            <TextInputForm
              placeholder="Type your message here..."
              value={message}
              onChange={handleInputChange}
              className="chat-input"
              suffix_icon={<FaArrowCircleRight />}
              onSend={handleSendMessage}
              ref={inputRef}
            />
            {suggestions.length > 0 && (
              <ul className="suggestion-list">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="suggestion-item"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
