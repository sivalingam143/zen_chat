import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { PageTitle } from "../components/PageTitle";
import { TextInputForm } from "../components/Forms";
import { FaArrowCircleRight } from "react-icons/fa";
import "./Dashboard.css";

const defaultQA = [
  {
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces, particularly single-page applications.",
  },
  {
    question: "How does useState work?",
    answer:
      "useState is a React Hook that lets you add state to functional components, returning a state variable and a function to update it.",
  },
  {
    question: "What is a component?",
    answer:
      "A component is a reusable building block in React that encapsulates UI logic and rendering.",
  },
  {
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension for JavaScript that allows HTML-like code in React components.",
  },
  {
    question: "What is the virtual DOM?",
    answer:
      "The virtual DOM is a lightweight copy of the actual DOM, used by React to optimize updates and rendering.",
  },
  {
    question: "What is a Hook?",
    answer:
      "Hooks are functions in React that let you use state and other features in functional components.",
  },
  {
    question: "How to handle events in React?",
    answer:
      "Events in React are handled using camelCase event handlers like onClick, passing functions as props.",
  },
  {
    question: "What is Redux?",
    answer:
      "Redux is a state management library for JavaScript apps, often used with React for predictable state updates.",
  },
  {
    question: "What is useEffect?",
    answer:
      "useEffect is a React Hook for handling side effects like data fetching or DOM manipulation in functional components.",
  },
  {
    question: "Why use React Router?",
    answer:
      "React Router is used for declarative routing in React apps, enabling navigation between components without page reloads.",
  },
];

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

    const matchedQA = defaultQA.find((qa) =>
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
