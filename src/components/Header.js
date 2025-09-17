import React, { useState, useEffect } from "react";
import { Navbar, Container, Button, Spinner } from "react-bootstrap";
import { MdLogout } from "react-icons/md";
import "./Header.css";

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      document.body.classList.remove("toggle-sidebar");
    }
  }, []);

  const handleToggle = () => {
    document.body.classList.toggle("toggle-sidebar");
  };
  // const handleLogout = () => {
  //   localStorage.removeItem("session");
  //   window.location.replace("/login");
  // };

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
          <div className="ms-auto">
            <Button className="logout-btn" onClick={/* handleLogout */ null}>
              <MdLogout size={24} />
            </Button>
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
