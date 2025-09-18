import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { TextInputForm } from "../components/Forms";
import { FaArrowCircleRight } from "react-icons/fa";
import "./Chat.css";
import categoryData from "./data";

const Chat = ({ setChatHistory, chatHistory }) => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [displayedBotMessage, setDisplayedBotMessage] = useState("");
  const [pendingBotMessage, setPendingBotMessage] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [loadingChatId, setLoadingChatId] = useState(null); // ✅ loading tied to chatId
  const [isFirstMessage, setIsFirstMessage] = useState(true);

  // Load messages when id or chatHistory changes
  useEffect(() => {
    const currentChat = chatHistory.find((chat) => chat.id === id);
    if (currentChat && currentChat.messages) {
      setMessages(currentChat.messages);
      setIsFirstMessage(currentChat.messages.length === 0);
    } else {
      setMessages([]);
      setIsFirstMessage(true);
    }
  }, [id, chatHistory]);

  // Match function
  const findBestMatch = (userMessage) => {
    const userMessageClean = userMessage.toLowerCase().trim();
    const userWords = userMessageClean.split(/\s+/).filter((w) => w.length > 2);

    let bestMatch = null;
    let bestCategory = null;
    let bestScore = 0;

    for (const category in categoryData) {
      if (categoryData[category].data) {
        for (const qa of categoryData[category].data) {
          const qaClean = qa.question.toLowerCase().trim();
          const qaWords = qaClean.split(/\s+/);

          // 1️⃣ Exact or near-exact sentence match (top priority)
          if (userMessageClean === qaClean) {
            return { match: qa, category };
          }

          // 2️⃣ Word overlap score
          let overlap = 0;
          for (const userWord of userWords) {
            if (
              qaWords.some(
                (qaWord) =>
                  qaWord.includes(userWord) || userWord.includes(qaWord)
              )
            ) {
              overlap++;
            }
          }

          const similarity =
            overlap / Math.max(userWords.length, qaWords.length);

          // 3️⃣ Weighted score: prefer higher similarity when overlap words are same
          const weightedScore = similarity + overlap * 0.01;

          if (weightedScore > bestScore) {
            bestScore = weightedScore;
            bestMatch = qa;
            bestCategory = category;
          }
        }
      }
    }

    return { match: bestMatch, category: bestCategory };
  };

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

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = { text: message, sender: "user" };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    // Auto rename on first message
    if (isFirstMessage) {
      const matched = findBestMatch(message);
      const newTitle = generateTitleFromMessage(message, matched);
      setChatHistory((prev) =>
        prev.map((chat) =>
          chat.id === id ? { ...chat, title: newTitle } : chat
        )
      );
      setIsFirstMessage(false);
    }

    // Save user message
    setChatHistory((prev) =>
      prev.map((chat) =>
        chat.id === id ? { ...chat, messages: updatedMessages } : chat
      )
    );

    setMessage("");

    // Bot typing simulation with chatId lock
    setLoadingChatId(id); // ✅ start loading only for this chat
    setTimeout(() => {
      const matched = findBestMatch(message);
      const botResponse = matched.match
        ? matched.match.answer
        : `Hmm, I don't have a specific answer for "${message}", but I'm happy to help! Could you clarify or ask something else?`;

      setPendingBotMessage({ text: botResponse, sender: "bot", chatId: id });
      setLoadingChatId(null); // ✅ stop loading once bot is ready
      setDisplayedBotMessage("");
      setIsTyping(true);
    }, 2000);
  };

  // Typing effect with chatId lock
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
        // Finish typing, push to messages
        setMessages((prev) => [...prev, pendingBotMessage]);
        setChatHistory((prev) =>
          prev.map((chat) =>
            chat.id === id
              ? { ...chat, messages: [...chat.messages, pendingBotMessage] }
              : chat
          )
        );
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
          <TextInputForm
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="chat-input"
            suffix_icon={<FaArrowCircleRight />}
            onSend={handleSendMessage}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
