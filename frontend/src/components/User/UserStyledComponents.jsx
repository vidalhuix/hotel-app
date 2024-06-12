import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: #44564c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 85px;
  width: auto;
  align-items: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 95px auto;
  align-items: center;
`;

export const Label = styled.label`
  margin-bottom: 0.25rem;
  margin-top: 0.25rem;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding-right: 30px;
`;

export const EyeIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 1em;
  color: #ccc;
`;

export const Button = styled.button`
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

export const SmallText = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  text-align: center;
`;

export const BoldText = styled.span`
  font-weight: bold;
`;

export const StyledLink = styled(Link)`
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

export const SignUpLink = styled(StyledLink)``;
export const SignInLink = styled(StyledLink)``;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: -0.5rem;
  margin-bottom: 0rem;
`;

export const SuccessMessage = styled.p`
  color: green;
  margin-top: -0.5rem;
  margin-bottom: 0rem;
`;
