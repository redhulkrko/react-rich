import React, { useState } from "react";
import { withRouter, NavLink } from "react-router-dom";

import {
  Clear,
  Dashboard,
  Theaters,
  LocalPlay,
  ViewList,
  Delete,
  Home,
  Reply
} from "@material-ui/icons";
import styled, { createGlobalStyle } from "styled-components";

// import { connect } from "react-redux";
// import { logout } from "../actions/session";

// const mapStateToProps = ({ session }) => ({
//   session
// });

// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch(logout())
// });

const GlobalStyle = createGlobalStyle`
    .activeRoute, .activeRoute svg {
      color: purple;
    }
`;

const SidebarNav = styled.aside`
  background-color: #252529;
  grid-area: sidenav;
  display: grid;
  height: 100%;
  overflow-y: auto;
  z-index: 2;
  box-shadow: 0 1px 0 0 #eaedf3;
  width: 240px;
  grid-template-columns: auto 1fr;
  grid-template-rows: 110px repeat(4, 60px) 90px 60px;
  align-items: end;

  @media (min-width: 768px) {
    grid-template-rows: 130px repeat(4, 60px) 110px 60px;
  }

  @media (min-width: 1200px) {
    width: 60px;
    justify-items: center;
    align-items: end;
    grid-template-rows: 100px repeat(4, 60px) 80px 60px;
    grid-template-columns: 1fr;
  }
`;

const NavTitle = styled.div`
  font-size: 1.3em !important;
  margin: 0;
  padding: 0;
  justify-content: left;

  @media (min-width: 768px) {
    font-size: 1.7em;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

const SidebarClose = styled.div`
  position: absolute;
  visibility: visible;
  top: 8px;
  right: 12px;
  cursor: pointer;
  font-size: 20px;
  color: #ddd;

  @media (min-width: 1200px) {
    visibility: hidden;
  }
`;

const SideNav = () => {
  const [expandedMenuArray, setExpandedMenuArray] = useState([]);
  console.log({ expandedMenuArray });

  return (
    <>
        <SidebarNav
          className={
            "nav" + (expandedMenuArray.includes("sidenav") ? " active" : "")
          }
        >
          <SidebarClose className="closeIcon">
            <Clear
              onClick={() => {
                if (expandedMenuArray.includes("sidenav")) {
                  setExpandedMenuArray(
                    expandedMenuArray.filter(item => item !== "sidenav")
                  );
                } else {
                  setExpandedMenuArray([...expandedMenuArray, "sidenav"]);
                }
              }}
            />
          </SidebarClose>
          <NavLink exact to="/dashboard" activeClassName="activeRoute">
            <Dashboard />
            <NavTitle>Dashboard</NavTitle>
          </NavLink>
                    <NavLink exact to="/dashboard/films" activeClassName="activeRoute">
            <Theaters />
            <NavTitle>Films</NavTitle>
          </NavLink>
                    <NavLink exact to="/dashboard/reviews" activeClassName="activeRoute">
            <LocalPlay />
            <NavTitle>Reviews</NavTitle>
          </NavLink>
                    <NavLink exact to="/dashboard/box-office" activeClassName="activeRoute">
            <ViewList />
            <NavTitle>Box Office</NavTitle>
          </NavLink>
                    <NavLink exact to="/dashboard/trash" activeClassName="activeRoute">
            <Delete />
            <NavTitle>Trash</NavTitle>
          </NavLink>
                    <NavLink exact to="/home" activeClassName="activeRoute">
            <Home />
            <NavTitle>Homepage</NavTitle>
          </NavLink>
                    <NavLink exact to="/dashboard/logout" activeClassName="activeRoute">
            <Reply />
            <NavTitle>Log Out</NavTitle>
          </NavLink>
        </SidebarNav>
        <GlobalStyle/>

    </>
  );
};
export default withRouter(SideNav);
