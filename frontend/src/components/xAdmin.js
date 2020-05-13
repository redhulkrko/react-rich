import React, { useState, useContext } from "react";
// import DashboardRouter from './DashboardRouter';

// import { connect } from "react-redux";
import { logout } from "../actions/session";

import Header from "./xHeader";
import Footer from "./xFooter";

import { MyTestStore } from './App';
import SideNav from "./xSide";

// const mapStateToProps = ({ session }) => ({
//   session
// });

// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch(logout())
// });



const Admin = ({ logout, session }) => {
    const {user, setState} = useContext(MyTestStore)

    // setState((current_state) => ({ ...current_state, myNewVar: '123' }))
    return (

    <>
    <Header/>
    <SideNav/>
    <Footer/>
</>
)};
      
export default (Admin);