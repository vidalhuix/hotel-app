import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  background-color: #44564c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 85px;
  width: auto;
  align-items: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 95px auto;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 0.25rem;
  margin-top: 0.25rem;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding-right: 30px;
`;

const EyeIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 1em;
  color: #ccc;
`;

const Button = styled.button`
  margin-top: 0.5rem;
  padding: 10px 30px;
  border-radius: 20px;
  border: none;
  background-color: #d3af97;
  color: white;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    color: #5a675f;
    background-color: #fff;
    transform: scale(1.05);
    transition: all ease 0.3s;
  }
`;

const SmallText = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  text-align: center;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const SignInLink = styled(Link)`
  font-weight: normal;
  color: white;
  text-decoration: none;
  margin-left: 5px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 0;
    height: 2px;
    bottom: -3px;
    background-color: #d3af97;
    transition: width 250ms ease-in;
  }

  &:hover {
    color: #d3af97;
  }

  &:hover::after {
    width: 100%;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  margin-top: -0.5rem;
  margin-bottom: 0rem;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: -0.5rem;
  margin-bottom: 0rem;
`;

export const Register = () => {
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

      if (response.ok) {
        console.log("Registration successful:", data);
        setSuccessMessage("Account created successfully. You can now proceed to log in.");
        setErrorMessage("");
        navigate("/login", {
          state: {
            successMessage: "Account created successfully. You can now proceed to log in.",
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
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>CREATE YOUR ACCOUNT</h2>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your full name"
            maxLength={100}
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
            maxLength={254}
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
        <Button type="submit">Register</Button>
        <SmallText>
          <BoldText>Already have an account?</BoldText>
          <SignInLink to="/login">Log in</SignInLink> instead!
        </SmallText>
      </Form>
    </Container>
  );
};
