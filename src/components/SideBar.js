import React, { useState, useEffect } from "react";
import "./SideBar.css";
import { NavLink, Route, Routes } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  MdOutlineHome,
  MdOutlinePerson,
  MdBusiness,
  MdOutlineAddShoppingCart,
  MdOutlineCategory,
  MdOutlineContentPasteGo,
  MdOutlineAddCard,
  MdOutlineFeed,
  MdMenuBook,
} from "react-icons/md";
import { PiUsers } from "react-icons/pi";
import { LuDot } from "react-icons/lu";
import { Collapse } from "react-bootstrap";
import { Header } from "./Header";
import Dashboard from "../pages/Dashboard";

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(
    JSON.parse(localStorage.getItem("openMenu")) || {}
  );

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

  return (
    <div className="">
      <Header />
      <aside id="side-bar" className="side-bar">
        <div className="list-group">
          <ul>
            {/* Home is always visible */}
            <li>
              <NavLink
                to="/dashboard"
                className="nav-link"
                onClick={handleLinkClick}
              >
                <span className="list-icon">
                  <MdOutlineHome />
                </span>
                <span className="list-text">Home</span>
              </NavLink>
            </li>
          </ul>
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
