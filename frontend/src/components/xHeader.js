import React, { useState, useContext, Fragment } from "react";
import styled from "styled-components";
import { Menu } from "@material-ui/icons";
import { MyTestStore } from './App';

import { Dropdown } from "./xDropdown";
import Avatar from "./xAvatar";

const MenuIcon = styled.div`
  position: fixed;
  display: flex;
  top: 3px;
  left: 10px;
  align-items: center;
  justify-content: center;
  z-index: 1;
  cursor: pointer;
  padding: 6px;
`;

const HeaderDiv = styled.header`
  grid-area: header;
  box-shadow: 0 1px 0 0 #eaedf3;
  padding: 0px 10px;
  align-items: center;
  justify-content: center;
`;


const Wrapper = styled.div`
  width: 100%;
  display: grid;
  margin-top: 2px;
  grid-template-columns: 1fr auto auto;
`;


const Header = () => {
const {user, setState} = useContext(MyTestStore)

const [expandedMenuArray, setExpandedMenuArray] = useState([])
console.log({expandedMenuArray})

const logOutHandler = () => {
  setState({user: undefined})
  fetch("api/session", { method: "DELETE" })
}

return (
<>
<MenuIcon className='openIcon'>
  <Menu onClick={() => {
    if(expandedMenuArray.includes('sidenav')){
        setExpandedMenuArray(expandedMenuArray.filter(item => item!=='sidenav'))
    } else {
        setExpandedMenuArray([...expandedMenuArray, 'sidenav'])
    }
  }}/>
</MenuIcon>

<HeaderDiv>
  <Fragment>
    <Wrapper>
      <div></div>
      <Dropdown Label="+ NEW POST"  />
      <Dropdown Type={Avatar} />
    </Wrapper>
  </Fragment>
</HeaderDiv>
</>
)
};
export default Header;