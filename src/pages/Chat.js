import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { PageTitle } from "../components/PageTitle";
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
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstMessage, setIsFirstMessage] = useState(true); // Track first message for auto rename

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

  // Improved matching function (returns match with category for title gen)
  const findBestMatch = (userMessage) => {
    const userWords = userMessage
      .toLowerCase()
      .split(/\s+/)
      .filter((word) => word.length > 2); // Split words, ignore short
    let bestMatch = null;
    let bestCategory = null;
    let bestScore = 0;

    for (const category in categoryData) {
      if (categoryData[category].data) {
        for (const qa of categoryData[category].data) {
          const qaWords = qa.question.toLowerCase().split(/\s+/);
          let score = 0;
          for (const userWord of userWords) {
            if (
              qaWords.some(
                (qaWord) =>
                  qaWord.includes(userWord) || userWord.includes(qaWord)
              )
            ) {
              score++;
            }
          }
          const similarity = score / Math.max(userWords.length, qaWords.length);
          if (similarity > 0.7 && similarity > bestScore) {
            // 70% match threshold
            bestScore = similarity;
            bestMatch = qa;
            bestCategory = category; // Capture category for title
          }
        }
      }
    }
    return { match: bestMatch, category: bestCategory };
  };

  const generateTitleFromMessage = (userMessage, matched) => {
    if (matched.match) {
      // Use category + snippet from answer (professional title)
      const snippet =
        matched.match.answer.split(".")[0].substring(0, 30) +
        (matched.match.answer.length > 30 ? "..." : "");
      return `${
        matched.category.charAt(0).toUpperCase() + matched.category.slice(1)
      }: ${snippet}`;
    } else {
      // No match: Generic based on message
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

    // Auto rename on first message with smart title
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

    // Update chatHistory in localStorage and parent state
    setChatHistory((prev) =>
      prev.map((chat) =>
        chat.id === id ? { ...chat, messages: updatedMessages } : chat
      )
    );

    // Clear input immediately
    setMessage("");

    // Show loading state for 2 seconds
    setIsLoading(true);
    setTimeout(() => {
      // Improved search
      const matched = findBestMatch(message);

      const botResponse = matched.match
        ? matched.match.answer
        : `Hmm, I don't have a specific answer for "${message}", but I'm happy to help! Could you clarify or ask something else?`;

      // Store bot response in pending state
      setPendingBotMessage({ text: botResponse, sender: "bot" });
      setIsLoading(false);
      setDisplayedBotMessage("");
      setIsTyping(true);
    }, 2000);
  };

  // Character-by-character typing effect
  useEffect(() => {
    if (isTyping && pendingBotMessage) {
      const fullText = pendingBotMessage.text;
      let currentIndex = displayedBotMessage.length;

      if (currentIndex < fullText.length) {
        const timer = setTimeout(() => {
          setDisplayedBotMessage(fullText.slice(0, currentIndex + 1));
        }, 50);

        return () => clearTimeout(timer);
      } else {
        // Typing complete, add to messages and clear pending
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
            {messages.length === 0 && !isLoading && !pendingBotMessage ? (
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
                {isLoading && (
                  <div className="message bot-message loading">
                    Loading<span className="loading-dots">...</span>
                  </div>
                )}
                {isTyping && pendingBotMessage && (
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
