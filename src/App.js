import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem("session");
    if (session) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("session");
    setLoggedIn(false);
    return <Navigate to="/login" replace />;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              loggedIn ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          ></Route>
          <Route element={<SideBar onLogout={handleLogout} />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
