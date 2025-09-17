import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PageTitle } from "../components/PageTitle";
import { TextInputForm } from "../components/Forms";
import "./Dashboard.css";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Add search functionality here if needed
  };

  return (
    <Container fluid className="position-relative main-content">
      <Row>
        <Col>
          <PageTitle PageTitle={"Chat Dashboard"} />
        </Col>
      </Row>
      <Row className="chat-container">
        <Col>
          <div className="chat-area">
            {/* Placeholder for chat messages */}
            <div className="chat-placeholder">
              Start a new chat or select a previous conversation
            </div>
          </div>
        </Col>
      </Row>
      <Row className="search-bar">
        <Col>
          <TextInputForm
            placeholder="Type your message here..."
            value={searchQuery}
            onChange={handleSearch}
            className="chat-input"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
