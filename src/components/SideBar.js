import React, { useState, useEffect } from "react";
import "./SideBar.css";
import { NavLink, Route, Routes } from "react-router-dom";
import { MdOutlineKeyboardArrowRight, MdOutlineHome } from "react-icons/md";
import { Header } from "./Header";
import Dashboard from "../pages/Dashboard";
import { ClickButton } from "./Buttons";
import { FaUserCircle } from "react-icons/fa";

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(
    JSON.parse(localStorage.getItem("openMenu")) || {}
  );
  const [chatHistory, setChatHistory] = useState([
    { id: 1, title: "Chat 1 - Project Discussion" },
    { id: 2, title: "Chat 2 - Planning" },
  ]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("openMenu", JSON.stringify(openMenu));
  }, [openMenu]);

  const handleMenuClick = (menuIndex) => {
    setOpenMenu((prevOpenMenu) => {
      const newOpenMenu = {};
      for (let key in prevOpenMenu) {
        newOpenMenu[key] = false;
      }
      newOpenMenu[menuIndex] = !prevOpenMenu[menuIndex];
      return newOpenMenu;
    });
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      document.body.classList.remove("toggle-sidebar");
    }
  };

  const handleNewChat = () => {
    const newChat = {
      id: chatHistory.length + 1,
      title: `Chat ${chatHistory.length + 1} - New Chat`,
    };
    setChatHistory([newChat, ...chatHistory]);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="chatgpt-sidebar-container">
      <Header />
      <aside id="side-bar" className="side-bar">
        <div className="list-group">
          <ul>
            <li className="new-chat-button">
              <ClickButton
                label={<>New Chat</>}
                onClick={handleNewChat}
                className="instant-add w-100"
              />
            </li>
          </ul>
          <div className="chat-history">
            <h6>Chat History</h6>
            <ul>
              {chatHistory.map((chat) => (
                <li key={chat.id} className="chat-history-item">
                  <NavLink to={`/chat/${chat.id}`} className="nav-link">
                    <span className="list-text">{chat.title}</span>
                    <span className="chat-date">{chat.date}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="user-profile">
          <div className="user-profile-container" onClick={togglePopup}>
            <FaUserCircle className="user-icon" />
            <span className="user-name">User Name</span>
          </div>
          {isPopupOpen && (
            <div className="user-popup">
              <div className="popup-item">Personalization</div>
              <div className="popup-item">Settings</div>
            </div>
          )}
        </div>
      </aside>
      <div id="main">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default SideBar;
