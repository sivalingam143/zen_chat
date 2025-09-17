import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { DropDownUI, TextInputForm } from "../components/Forms";
import API_DOMAIN from "../config/config";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { ClickButton } from "../components/Buttons";

const Login = ({ onLogin }) => {
  const [phone_number, setPhoneNumber] = useState("");
  const [company_id, setCompanyId] = useState("zentexus123");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [userData, setUserData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_DOMAIN}/company.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          search_text: "",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch company data");
      }

      const responseData = await response.json();

      if (responseData.status === 200) {
        setUserData(responseData.data);
      } else {
        throw new Error(responseData.msg);
      }
    } catch (error) {
      console.error("Error fetching company data:", error.message);
    }
  };

  const fetchUsersData = async () => {
    try {
      const response = await fetch(`${API_DOMAIN}/user.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          search_text: "",
        }),
      });

      const responseData = await response.json();
      if (responseData.head.code === 200) {
        setUsersData(responseData.body.user);
      } else {
        throw new Error(responseData.head.msg);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchUsersData();
  }, []);

  const handleLogin = async () => {
    try {
      if (phone_number === "" || company_id === "" || password === "") {
        throw new Error("Phone Number, Company ID, or Password is empty");
      }

      const loginData = {
        phone_number: phone_number,
        company_id: company_id,
        password: password,
      };

      const response = await fetch(`${API_DOMAIN}/auth.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const responseData = await response.json();
      console.log(responseData);
      if (responseData.head.code !== 200) {
        setError(responseData.head.msg);
      } else if (responseData.head.code === 200) {
        const loggedInUser = usersData.find(
          (user) =>
            user.phone_number === Number(phone_number) &&
            user.password === Number(password)
        );

        if (!loggedInUser) {
          throw new Error("User not found or invalid credentials");
        }

        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
        localStorage.setItem("companyId", company_id);
        localStorage.setItem("session", "true");
        onLogin();
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error.message);
      setError(error.message);
    }
  };

  return (
    <div className="login-bg">
      <Container fluid className="pad">
        <Row xs="12" className="justify-content-center">
          <Col lg="4" className="align-self-center">
            <div className="login-box">
              <Row xs="12">
                <Col lg="12">
                  <div className="text-center">
                    <img
                      src={require("../assests/images/logo.png")}
                      className="img-fluid login-logo"
                      alt=""
                    />
                  </div>
                </Col>
                <Col lg="12">
                  <div className="text-center fs-3 py-2">
                    Sign in to Your Account
                  </div>
                  <div className="text-center py-2">
                    Unleash Admin Excellence - Get Started Today
                  </div>
                </Col>
                {/* <Col lg="12">
                  <div className="py-3">
                    <DropDownUI
                      optionlist={userData.map((user) => ({
                        value: user.company_id,
                        label: user.company_name,
                      }))}
                      placeholder="Select Company"
                      name="company_id"
                      value={company_id}
                      onChange={(e) => setCompanyId(e.company_id)}
                    />
                  </div>
                </Col> */}
                <Col lg="12">
                  <div className="py-3">
                    <TextInputForm
                      placeholder={"Phone Number"}
                      value={phone_number}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </Col>
                <Col lg="12">
                  <div className="py-3">
                    <TextInputForm
                      placeholder={"Password"}
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      suffix_icon={
                        showPassword ? (
                          <VscEye onClick={() => setShowPassword(false)} />
                        ) : (
                          <VscEyeClosed onClick={() => setShowPassword(true)} />
                        )
                      }
                    />
                  </div>
                </Col>
              </Row>
              <div className="py-3 text-center">
                <ClickButton label={<>Login</>} onClick={handleLogin} />
              </div>
              {error && <Alert variant="danger">{error}</Alert>}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
