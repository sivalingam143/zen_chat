import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { PageTitle } from "../components/PageTitle";
import { TextInputForm } from "../components/Forms";
import { FaArrowCircleRight } from "react-icons/fa";
import "./Chat.css";
import categoryData from "./data";

const Chat = ({ setChatHistory }) => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [displayedBotMessage, setDisplayedBotMessage] = useState("");
  const [pendingBotMessage, setPendingBotMessage] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load messages from localStorage on mount
  useEffect(() => {
    const chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    const currentChat = chatHistory.find((chat) => chat.id === parseInt(id));
    if (currentChat && currentChat.messages) {
      setMessages(currentChat.messages);
    }
  }, [id]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = { text: message, sender: "user" };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    // Update chatHistory in localStorage and parent state
    const chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setChatHistory((prev) =>
      prev.map((chat) =>
        chat.id === parseInt(id) ? { ...chat, messages: updatedMessages } : chat
      )
    );

    // Clear input immediately
    setMessage("");

    // Show loading state for 2 seconds
    setIsLoading(true);
    setTimeout(() => {
      // Search through all category data arrays
      let matchedQA = null;
      for (const category in categoryData) {
        if (categoryData[category].data) {
          matchedQA = categoryData[category].data.find((qa) =>
            qa.question.toLowerCase().includes(message.toLowerCase())
          );
          if (matchedQA) break;
        }
      }

      const botResponse = matchedQA
        ? matchedQA.answer
        : `Hmm, I don't have a specific answer for "${message}", but I'm happy to help! Could you clarify or ask something else?`;

      // Store bot response in pending state instead of messages
      setPendingBotMessage({ text: botResponse, sender: "bot" });
      setIsLoading(false);
      setDisplayedBotMessage("");
      setIsTyping(true);
    }, 2000); // 2-second delay
  };

  // Line-by-line typing effect
  useEffect(() => {
    if (isTyping && pendingBotMessage) {
      const lines = pendingBotMessage.text
        .split(". ")
        .map((line) => line + (line.endsWith(".") ? "" : "."));
      let currentIndex = displayedBotMessage
        ? displayedBotMessage.split(". ").length - 1
        : 0;

      if (currentIndex < lines.length) {
        const timer = setTimeout(() => {
          setDisplayedBotMessage((prev) =>
            prev ? `${prev} ${lines[currentIndex]}` : lines[currentIndex]
          );
        }, 500); // 0.5 seconds per line

        return () => clearTimeout(timer);
      } else {
        // Typing complete, add to messages and clear pending
        setMessages((prev) => [...prev, pendingBotMessage]);
        setChatHistory((prev) =>
          prev.map((chat) =>
            chat.id === parseInt(id)
              ? { ...chat, messages: [...chat.messages, pendingBotMessage] }
              : chat
          )
        );
        setIsTyping(false);
        setPendingBotMessage(null);
      }
    }
  }, [isTyping, displayedBotMessage, pendingBotMessage, id, setChatHistory]);

  return (
    <Container fluid className="position-relative main-content">
      <Row>
        <Col>
          <PageTitle PageTitle={`Chat ${id}`} />
        </Col>
      </Row>
      <Row className="chat-container">
        <Col>
          <div className="chat-area">
            {messages.length === 0 && !isLoading && !pendingBotMessage ? (
              <div className="chat-placeholder">
                Chat {id} messages would be here
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
