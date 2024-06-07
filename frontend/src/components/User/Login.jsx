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

const SignUpLink = styled(Link)`
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

const ErrorMessage = styled.p`
  color: red;
  margin-top: -0.5rem;
  margin-bottom: 0rem;
`;

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

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
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const response = await fetch("https://sunside-hotel.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("accessToken", data.accessToken);
        navigate("/user-details");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Failed to log in. Please try again later.");
    }
  };

  return (
    <Container>
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
              placeholder="Enter your password"
              maxLength={20}
            />
            <EyeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={togglePasswordVisibility}
            />
          </InputWrapper>
        </FormGroup>
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
