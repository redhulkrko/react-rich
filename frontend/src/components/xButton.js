import React from "react";
import styled from "styled-components";

const Menu = styled.button`
background-color: #ddd;
    border: none;
    color: black;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: block;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 16px;
  position:relative;
  outline:none;
`;

const Button = ({ children, ...props }) => <Menu {...props}>{children}</Menu>;



export default Button;
