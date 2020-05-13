import React from "react";
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    .dropdown-active {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
    }
`;

const Dropdown = styled.div`
    position: absolute;
    top: 54px;
    right: -16px;
    width: 220px;
    height: auto;
    z-index: 1;
    background-color: #fff;
    border-radius: 4px;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-10px);
    transition: all .3s;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);

    :before {
        position: absolute;
        content: "";
        top: -6px;
        right: 30px;
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 6px solid #FFF;
    }
`;

const DropdownList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

const DropdownItem = styled.li`
    padding: 12px 24px;
    color: #777;
    text-transform: capitalize;

    :hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

const DropdownIcon = styled.span`
    color: #1BBAE1;
`;

const DropdownTitle = styled.span`
    margin-left: 10px;
`;

const DropdownPost = ({ logout, session }) => (
    <>
     <GlobalStyle/>
     <Dropdown>
         <DropdownList>
             <DropdownItem>
                 <DropdownIcon/>
                 <DropdownTitle/>
             </DropdownItem>
         </DropdownList>
     </Dropdown>
    </>
);

const DropdownAvatar = ({ logout, session }) => (
    <>
     <GlobalStyle/>
     <Dropdown>
         <DropdownList>
             <DropdownItem>
                 <DropdownIcon/>
                 <DropdownTitle/>
             </DropdownItem>
         </DropdownList>
     </Dropdown>
    </>
);

export {DropdownPost, DropdownAvatar};
      