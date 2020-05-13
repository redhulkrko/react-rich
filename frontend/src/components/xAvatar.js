import React from "react";
import styled from "styled-components";

const Menu = styled.div`
  background-image: url("./avatar.png");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
  position: relative;
  margin: 2px 26px;
  width: 38px;
  height: 38px;
  cursor: pointer;

  :after {
    position: absolute;
  content: "";
  width: 6px;
  height: 6px;
  background: none;
  border-left: 2px solid #777;
  border-bottom: 2px solid #777;
  transform: rotate(-45deg) translateY(-50%);
  top: 50%;
  right: -18px;
  }
`;

const Avatar = ({ children, ...props }) => <Menu {...props}>{children}</Menu>;



export default Avatar;
