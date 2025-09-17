import React, { useState, useEffect } from "react";
import "./SideBar.css";
import { NavLink, Route, Routes } from "react-router-dom";
import { MdOutlineKeyboardArrowRight, MdOutlineHome } from "react-icons/md";
import { Header } from "./Header";
import Dashboard from "../pages/Dashboard";
import { ClickButton } from "./Buttons";

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(
    JSON.parse(localStorage.getItem("openMenu")) || {}
  );
  const [chatHistory, setChatHistory] = useState([
    { id: 1, title: "Chat 1 - Project Discussion", date: "2025-09-16" },
    { id: 2, title: "Chat 2 - Planning", date: "2025-09-15" },
  ]);

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
      date: new Date().toISOString().split("T")[0],
    };
    setChatHistory([newChat, ...chatHistory]);
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
