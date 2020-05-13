import React, { useState, useContext } from "react";
import styled from "styled-components";
import { MyTestStore } from './App'

import {DropdownPost, DropdownAvatar} from './Dropdown';

const HeaderDiv = styled.div`
  grid-area: header;
  display: flex;
  padding: 0px 16px;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid #f9fafc;
  background-color: #fff;
`;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto auto;
`;

const HeaderIcon = styled.div`

`;

const HeaderMenu = styled.i`
  position: fixed;
  padding: 13px;
  left: 12px;
  background-color: #DADAE3;
  border-radius: 50%;
  z-index: 1;

  :hover {
    cursor: pointer;
  }
`;

const HeaderButton = styled.button`
  grid-area: 1/3;
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
`;

const HeaderAvatar = styled.div`
  grid-area: 1/4;
  background-image: url("../img/avatar.png");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
  position: relative;
  margin: 0 26px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  display: block;

&:after {
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

@media only screen and (min-width: 46.875em) {
  width: 40px;
  height: 40px;
}
`;

// const HeaderContainer = styled.header`
// grid-area: header;
// display: flex;
// align-items: center;
// justify-content: space-between;
// background-color: #F9FAFC;
// `;

// const HeaderMenuIcon = styled.i`
// position: fixed;
// padding: 13px;
// left: 12px;
// background-color: #DADAE3;
// border-radius: 50%;
// z-index: 1;

// &:hover {
// cursor: pointer;
// }

// @media only screen and (min-width: 46.875em) {
// display: none;
// }
// `;

// const HeaderSearch = styled.div`
// margin-left: 55px;
// font-size: 20px;
// color: #777;

// @media only screen and (min-width: 46.875em) {
// margin-left: 20px;
// }
// `;

// const HeaderSearchInput = styled.input`
// border: none;
// background: transparent;
// padding: 12px;
// font-size: 20px;
// color: #777;

// &:focus {
// outline: none;
// border: none;
// }
// `;

// const HeaderAvatar = styled.div`
// background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1609106/headshot.png");
// background-size: cover;
// background-repeat: no-repeat;
// border-radius: 50%;
// border: 2px solid rgba(255, 255, 255, 0.2);
// position: relative;
// margin: 0 26px;
// width: 35px;
// height: 35px;
// cursor: pointer;

// &:after {
// position: absolute;
// content: "";
// width: 6px;
// height: 6px;
// background: none;
// border-left: 2px solid #777;
// border-bottom: 2px solid #777;
// transform: rotate(-45deg) translateY(-50%);
// top: 50%;
// right: -18px;
// }

// @media only screen and (min-width: 46.875em) {
// width: 40px;
// height: 40px;
// }
// `;

// const HeaderDropdownList = styled.ul`
// margin: 0;
// padding: 0;
// list-style-type: none;
// `;

// const HeaderDropdownListItem = styled.li`
// padding: 12px 24px;
// color: #777;
// text-transform: capitalize;

// &:hover{
// background-color: rgba(0, 0, 0, 0.1);    
// }
// `;

// const HeaderDropdownTitleIcon = styled.span`
// color: #1BBAE1;
// `;

// const HeaderDropdownTitle = styled.span`
// margin-left: 10px;
// `;



const Header = () => {
  const {user, setState} = useContext(MyTestStore)

const [expandedMenuArray, setExpandedMenuArray] = useState([])
console.log({expandedMenuArray})

const logOutHandler = () => {
  setState({user: undefined})
  fetch("api/session", { method: "DELETE" })
}

return (
<HeaderDiv>
  <Wrapper>
    <HeaderIcon>
      <HeaderMenu className="fas fa-bars"/>
    </HeaderIcon>
    <HeaderButton>
      + NEW POST
    </HeaderButton>
    <DropdownPost/>
    <HeaderAvatar className="header__avatar" onClick={() => {
      if(expandedMenuArray.includes('avatar')){
          setExpandedMenuArray(expandedMenuArray.filter(item => item!=='avatar'))
      } else {
          setExpandedMenuArray([...expandedMenuArray, 'avatar'])
      }
      }}>
    <DropdownAvatar/>
    </HeaderAvatar>
  </Wrapper>
</HeaderDiv>
)
};
export default Header;