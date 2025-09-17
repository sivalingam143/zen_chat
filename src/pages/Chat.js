import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { PageTitle } from "../components/PageTitle";
import { TextInputForm } from "../components/Forms";
import { FaArrowCircleRight } from "react-icons/fa";
import "./Dashboard.css";
import categoryData from "./data";

const Chat = ({ setChatHistory }) => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [displayedBotMessage, setDisplayedBotMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

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

    const matchedQA = categoryData.find((qa) =>
      qa.question.toLowerCase().includes(message.toLowerCase())
    );
    const botResponse = matchedQA
      ? matchedQA.answer
      : `Hmm, I don't have a specific answer for "${message}", but I'm happy to help! Could you clarify or ask something else?`;

    const botMessage = { text: botResponse, sender: "bot" };
    const finalMessages = [...updatedMessages, botMessage];
    setMessages(finalMessages);
    setMessage("");
    setDisplayedBotMessage("");
    setIsTyping(true);

    // Update localStorage and parent state with bot message
    setChatHistory((prev) =>
      prev.map((chat) =>
        chat.id === parseInt(id) ? { ...chat, messages: finalMessages } : chat
      )
    );
  };

  // Typing effect
  useEffect(() => {
    if (isTyping && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (
        lastMessage.sender === "bot" &&
        displayedBotMessage !== lastMessage.text
      ) {
        const words = lastMessage.text.split(" ");
        let currentIndex = displayedBotMessage
          ? displayedBotMessage.split(" ").length
          : 0;

        if (currentIndex < words.length) {
          const timer = setTimeout(() => {
            setDisplayedBotMessage((prev) =>
              prev ? `${prev} ${words[currentIndex]}` : words[currentIndex]
            );
          }, 100);

          return () => clearTimeout(timer);
        } else {
          setIsTyping(false);
        }
      }
    }
  }, [isTyping, displayedBotMessage, messages]);

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
            {messages.length === 0 ? (
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
                    {msg.sender === "bot" &&
                    isTyping &&
                    messages[messages.length - 1] === msg
                      ? displayedBotMessage || "..."
                      : msg.text}
                  </div>
                ))}
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
