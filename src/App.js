import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/SideBar";
import Login from "./pages/Login";
import Chat from "./pages/Chat";

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

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              // loggedIn ? (
                <Navigate to="/chat/1" replace />
              // ) : (
              //   <Navigate to="/login" replace />
              // )
            }
          />
          {/* <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          ></Route> */}
          <Route element={<SideBar />}>
            <Route path="/chat/:id" element={<Chat />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
