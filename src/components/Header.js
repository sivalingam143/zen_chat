import React, { useState, useEffect } from "react";
import { Navbar, Container, Button, Spinner } from "react-bootstrap";
import { MdLogout } from "react-icons/md";
import "./Header.css";
import { FaTrashAlt } from "react-icons/fa";

const Header = ({ setChatHistory, navigate }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      document.body.classList.remove("toggle-sidebar");
    }
  }, []);

  const handleToggle = () => {
    document.body.classList.toggle("toggle-sidebar");
  };

  const handleLogout = () => {
    localStorage.removeItem("session");
    window.location.replace("/login");
  };

  const handleClearChatHistory = () => {
    localStorage.removeItem("chatHistory");
    localStorage.removeItem("lastChatId");
    setChatHistory([]);
    navigate("/chat/new");
  };

  return (
    <div>
      <Navbar className="navfix navbg header fixed-top">
        <Container fluid>
          <div className="d-flex align-items-center">
            <Button
              className="menu-toggle me-3"
              id="menu-toggle"
              onClick={handleToggle}
            >
              <span className="navbar-toggler-icon"></span>
            </Button>
          </div>
          <div className="ms-auto d-flex align-items-center">
            <Button
              className="clear-chat-btn me-2"
              onClick={handleClearChatHistory}
            >
              <FaTrashAlt size={14} /> Clear Session
            </Button>
            {/* <Button className="logout-btn" onClick={handleLogout}>
              <MdLogout size={24} />
            </Button> */}
          </div>
        </Container>
      </Navbar>
      {isLoading && (
        <div className="loading-overlay">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
    </div>
  );
};

export { Header };
