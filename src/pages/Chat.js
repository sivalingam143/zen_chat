import React, { useState } from "react";
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

const Chat = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user's message to chat
    const userMessage = { text: message, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    // Find matching answer in defaultQA
    const matchedQA = defaultQA.find((qa) =>
      qa.question.toLowerCase().includes(message.toLowerCase())
    );

    // Simulate Grok-like response
    const botResponse = matchedQA
      ? matchedQA.answer
      : `Hmm, I don't have a specific answer for "${message}", but I'm happy to help! Could you clarify or ask something else?`;

    // Add bot's response to chat
    setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
    setMessage(""); // Clear input
  };

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
                    {msg.text}
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
