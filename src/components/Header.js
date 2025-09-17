import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Button, Navbar, Spinner } from "react-bootstrap";

import { MdLogout } from "react-icons/md";
import "./Header.css";

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const initialCompanyId = localStorage.getItem("companyId") || "";

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

  return (
    <div>
      <Navbar className="navfix navbg header fixed-top">
        <Container fluid>
          <div lg={3} xs={3} className="align-self-center">
            <Button
              className="menu-toggle"
              id="menu-toggle"
              onClick={handleToggle}
            >
              <span className="navbar-toggler-icon"></span>
            </Button>
          </div>
          <div lg={3} xs={3} className="user-logo mx-5">
            <img
              src={require("../assests/images/logo1.png")}
              className="img-fluid logo"
              alt=""
            />
          </div>
          <div lg={3} xs={3} className="ms-auto d-flex align-items-center">
            <div lg={3} xs={3} className="ms-auto user-id">
              <Button>
                <MdLogout onClick={handleLogout} />
              </Button>
            </div>
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
