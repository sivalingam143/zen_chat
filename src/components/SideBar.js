import React, { useState, useEffect, useRef } from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import { Header } from "./Header";
import { ClickButton } from "./Buttons";
import Chat from "../pages/Chat";
import "./SideBar.css";

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(
    JSON.parse(localStorage.getItem("openMenu")) || {}
  );
  const [chatHistory, setChatHistory] = useState(
    JSON.parse(localStorage.getItem("chatHistory")) || []
  );
  const [chatPopup, setChatPopup] = useState(null);
  const [renameChatId, setRenameChatId] = useState(null);
  const [newChatTitle, setNewChatTitle] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const popupRef = useRef(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setUser(loggedInUser || { name: "Guest" });
  }, []);

  useEffect(() => {
    localStorage.setItem("openMenu", JSON.stringify(openMenu));
  }, [openMenu]);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }, [chatHistory]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setChatPopup(null);
      }
    };
    if (chatPopup !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
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

  const handleLinkClick = (chatId) => {
    if (window.innerWidth <= 768) {
      document.body.classList.remove("toggle-sidebar");
    }
    localStorage.setItem("lastChatId", chatId);
  };

  const generateUniqueId = () => {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  };

  const handleNewChat = () => {
    const newId = generateUniqueId();
    const newChat = { id: newId, title: "New Chat", messages: [] };
    setChatHistory((prev) => {
      const updatedHistory = [newChat, ...prev];
      localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
      return updatedHistory;
    });
    localStorage.setItem("lastChatId", newId);
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
    setChatPopup(null);
  };

  const handleSaveRename = (chatId) => {
    if (newChatTitle.trim()) {
      setChatHistory((prev) =>
        prev.map((chat) =>
          chat.id === chatId
            ? { ...chat, title: newChatTitle.trim().substring(0, 50) }
            : chat
        )
      );
    }
    setRenameChatId(null);
    setNewChatTitle("");
  };

  const handleDeleteChat = (chatId) => {
    setChatHistory((prev) => {
      const updatedHistory = prev.filter((chat) => chat.id !== chatId);
      localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
      return updatedHistory;
    });
    setChatPopup(null);

    const lastChatId = localStorage.getItem("lastChatId");
    if (lastChatId === chatId) {
      const remainingChats = chatHistory.filter((chat) => chat.id !== chatId);
      if (remainingChats.length > 0) {
        const newLastChatId = remainingChats[0].id;
        localStorage.setItem("lastChatId", newLastChatId);
        navigate(`/chat/${newLastChatId}`);
      } else {
        localStorage.removeItem("lastChatId");
        navigate("/chat/new");
      }
    }
  };

  const userInitial = user?.name?.charAt(0).toUpperCase() || "G";

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
                          onBlur={() => handleSaveRename(chat.id)}
                        />
                      </div>
                    ) : (
                      <NavLink
                        to={`/chat/${chat.id}`}
                        className="nav-link"
                        onClick={() => handleLinkClick(chat.id)}
                      >
                        <span className="list-text">{chat.title}</span>
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
            <div className="user-initial">{userInitial}</div>
            <span className="user-name">{user?.name || "Guest"}</span>
          </div>
        </div>
      </aside>
      <div id="main">
        <Routes>
          <Route
            path="/chat/:id"
            element={
              <Chat setChatHistory={setChatHistory} chatHistory={chatHistory} />
            }
          />
          <Route
            path="/chat/new"
            element={
              <Chat setChatHistory={setChatHistory} chatHistory={chatHistory} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default SideBar;
