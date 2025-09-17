import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { PageTitle } from "../components/PageTitle";
import { TextInputForm } from "../components/Forms";
import { FaArrowCircleRight } from "react-icons/fa";
import "./Dashboard.css";

const Chat = ({ setChatHistory }) => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [displayedBotMessage, setDisplayedBotMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // Load messages from localStorage on mount
  useEffect(() => {
    const chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    const currentChat = chatHistory.find((chat) => chat.id === parseInt(id));
    if (currentChat && currentChat.messages) {
      setMessages(currentChat.messages);
    }
  }, [id]);

  const fetchAIResponse = async (userMessage) => {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userMessage }] }],
          }),
        }
      );

      const data = await response.json();
      console.log("AI Response:", data); // 🔎 Debugging

      return (
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "⚠️ No response from Gemini."
      );
    } catch (error) {
      console.error("Error fetching AI response:", error);
      return "⚠️ Error connecting to AI service.";
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    // Add user message to chat
    const userMessage = { text: message, sender: "user" };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    // Save user message to chat history
    setChatHistory((prev) =>
      prev.map((chat) =>
        chat.id === parseInt(id) ? { ...chat, messages: updatedMessages } : chat
      )
    );

    setMessage("");
    setDisplayedBotMessage("");
    setIsLoading(true);

    // Fetch AI response
    const botResponse = await fetchAIResponse(userMessage.text);
    setIsLoading(false);

    // Add bot response to messages
    const botMessage = { text: botResponse, sender: "bot" };
    const finalMessages = [...updatedMessages, botMessage];
    setMessages(finalMessages);

    // Save bot response to chat history
    setChatHistory((prev) =>
      prev.map((chat) =>
        chat.id === parseInt(id) ? { ...chat, messages: finalMessages } : chat
      )
    );

    setIsTyping(true); // Start typing effect
  };

  // Line-by-line typing effect
  useEffect(() => {
    if (isTyping && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (
        lastMessage.sender === "bot" &&
        displayedBotMessage !== lastMessage.text
      ) {
        const lines = lastMessage.text
          .split("\n")
          .filter((line) => line.trim());
        const currentLines = displayedBotMessage
          ? displayedBotMessage.split("\n")
          : [];
        const currentIndex = currentLines.length;

        if (currentIndex < lines.length) {
          const timer = setTimeout(() => {
            setDisplayedBotMessage(
              [...currentLines, lines[currentIndex]].join("\n")
            );
          }, 200); // 200ms delay per line for smooth effect

          return () => clearTimeout(timer);
        } else {
          setIsTyping(false); // Stop typing when all lines are displayed
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
                {isLoading && (
                  <div className="message bot-message loading">
                    <span className="loading-dots">Loading...</span>
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
            disabled={isLoading} // Disable input during loading
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
