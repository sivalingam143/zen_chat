import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { PageTitle } from "../components/PageTitle";
import { TextInputForm } from "../components/Forms";
import "./Dashboard.css"; // Reuse Dashboard CSS

const Chat = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    // Add send message functionality here if needed
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
            {/* Placeholder for chat messages */}
            <div className="chat-placeholder">
              Chat {id} messages would be here
            </div>
          </div>
        </Col>
      </Row>
      <Row className="search-bar">
        <Col>
          <TextInputForm
            placeholder="Type your message here..."
            value={message}
            onChange={handleMessageChange}
            className="chat-input"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
