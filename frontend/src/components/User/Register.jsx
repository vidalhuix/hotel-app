import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  SignInLink,
  ErrorMessage,
  SuccessMessage,
} from "./UserStyledComponents";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const Register = ({ height = "100vh" }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

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
      const response = await fetch("https://sunside-hotel.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setSuccessMessage(
          "Account created successfully. You can now proceed to log in."
        );
        setErrorMessage("");

        navigate("/login", {
          state: {
            successMessage:
              "Account created successfully. You can now proceed to log in",
          },
        });
      } else {
        console.error("Registration failed:", data);
        setErrorMessage("Registration failed. Please try again.");
        setSuccessMessage("");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      setErrorMessage("Registration failed. Please try again later.");
      setSuccessMessage("");
    }
  };

  return (
    <Container height={height}>
      <Form onSubmit={handleSubmit}>
        <h2>CREATE YOUR ACCOUNT</h2>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your full name"
            maxLength={30}
          />
        </FormGroup>
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
              placeholder="Enter a password"
              maxLength={20}
            />
            <EyeIcon
              icon={showPassword ? faEye : faEyeSlash}
              onClick={togglePasswordVisibility}
            />
          </InputWrapper>
        </FormGroup>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button type="submit">Register</Button>
        <SmallText>
          <BoldText>Already have an account?</BoldText>
          <SignInLink to="/login">Log in</SignInLink> instead!
        </SmallText>
      </Form>
    </Container>
  );
};
