import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Container,
  Form,
  FormGroup,
  Label,
  InputWrapper,
  Input,
  EyeIcon,
  Button,
  SmallText,
  BoldText,
  SignUpLink,
  ErrorMessage,
  SuccessMessage,
} from "./UserStyledComponents";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "./AuthContext";

export const Login = ({ height = "100vh" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (location.state && location.state.successMessage) {
      setSuccessMessage(location.state.successMessage);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://sunside-hotel.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data); //there is no id but only accessToken
      if (response.ok) {
        login(data.accessToken);
        navigate("/user-details", {
          state: {
            successMessage: "Logged in successfully.",
          },
        });
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Failed to log in. Please try again later.");
    }
  };

  return (
    <Container height={height}>
      <Form onSubmit={handleSubmit}>
        <h2>LOG IN TO YOUR ACCOUNT</h2>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email address"
            maxLength={30}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password:</Label>
          <InputWrapper>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              maxLength={20}
            />
            <EyeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={togglePasswordVisibility}
            />
          </InputWrapper>
        </FormGroup>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">Log In</Button>
        <SmallText>
          <BoldText>Don't have an account?</BoldText>
          <SignUpLink to="/register">Sign up</SignUpLink> now!
        </SmallText>
      </Form>
    </Container>
  );
};
