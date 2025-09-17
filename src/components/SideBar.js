import React, { useState, useEffect, useRef } from "react";
import "./SideBar.css";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight, MdOutlineHome } from "react-icons/md";
import { FaUserCircle, FaEllipsisV } from "react-icons/fa";
import { Header } from "./Header";
import Dashboard from "../pages/Dashboard";
import { ClickButton } from "./Buttons";
import Chat from "../pages/Chat";

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(
    JSON.parse(localStorage.getItem("openMenu")) || {}
  );
  const initialChatHistory = [
    {
      id: 1,
      title: "Chat 1 - Project Discussion",
      date: "2023-09-16",
      messages: [],
    },
    { id: 2, title: "Chat 2 - Planning", date: "2023-09-17", messages: [] },
  ];
  const [chatHistory, setChatHistory] = useState(
    JSON.parse(localStorage.getItem("chatHistory")) || initialChatHistory
  );
  const [chatPopup, setChatPopup] = useState(null);
  const [renameChatId, setRenameChatId] = useState(null);
  const [newChatTitle, setNewChatTitle] = useState("");
  const navigate = useNavigate();
  const popupRef = useRef(null); // Ref for the chat popup

  // Save openMenu to localStorage
  useEffect(() => {
    localStorage.setItem("openMenu", JSON.stringify(openMenu));
  }, [openMenu]);

  // Save chatHistory to localStorage
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }, [chatHistory]);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setChatPopup(null);
      }
    };

    if (chatPopup !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [chatPopup]);

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
    const newId = chatHistory.length + 1;
    const newChat = {
      id: newId,
      title: "New Chat",
      messages: [],
    };
    setChatHistory([newChat, ...chatHistory]);
    navigate(`/chat/${newId}`);
  };

  const handleChatPopup = (chatId) => {
    setChatPopup(chatPopup === chatId ? null : chatId);
    setRenameChatId(null);
  };

  const handleRenameChat = (chatId) => {
    const chat = chatHistory.find((c) => c.id === chatId);
    setNewChatTitle(chat.title);
    setRenameChatId(chatId);
    setChatPopup(null); // Close popup
  };

  const handleSaveRename = (chatId) => {
    if (newChatTitle.trim()) {
      setChatHistory((prev) =>
        prev.map((chat) =>
          chat.id === chatId ? { ...chat, title: newChatTitle } : chat
        )
      );
      setRenameChatId(null);
      setNewChatTitle("");
    }
  };

  const handleDeleteChat = (chatId) => {
    setChatHistory((prev) => prev.filter((chat) => chat.id !== chatId));
    setChatPopup(null);
    if (window.location.pathname === `/chat/${chatId}`) {
      navigate("/dashboard");
    }
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
                  <div className="chat-item-container">
                    {renameChatId === chat.id ? (
                      <div className="rename-input-container">
                        <input
                          type="text"
                          value={newChatTitle}
                          onChange={(e) => setNewChatTitle(e.target.value)}
                          className="rename-input"
                          placeholder="Enter new title"
                          autoFocus
                          onKeyDown={(e) => {
                            if (e.key === "Enter") handleSaveRename(chat.id);
                          }}
                        />
                        <button
                          className="rename-save-btn"
                          onClick={() => handleSaveRename(chat.id)}
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <NavLink
                        to={`/chat/${chat.id}`}
                        className="nav-link"
                        onClick={handleLinkClick}
                      >
                        <span className="list-text">{chat.title}</span>
                        {chat.title !== "New Chat" && (
                          <span className="chat-date">{chat.date}</span>
                        )}
                      </NavLink>
                    )}
                    <FaEllipsisV
                      className="chat-options-icon"
                      onClick={() => handleChatPopup(chat.id)}
                    />
                    {chatPopup === chat.id && (
                      <div className="chat-popup" ref={popupRef}>
                        <div
                          className="popup-item"
                          onClick={() => handleRenameChat(chat.id)}
                        >
                          Rename
                        </div>
                        <div
                          className="popup-item"
                          onClick={() => handleDeleteChat(chat.id)}
                        >
                          Delete
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="user-profile">
          <div className="user-profile-container">
            <FaUserCircle className="user-icon" />
            <span className="user-name">User Name</span>
          </div>
        </div>
      </aside>
      <div id="main">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/chat/:id"
            element={<Chat setChatHistory={setChatHistory} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default SideBar;
