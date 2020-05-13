import React, { useState, useContext } from "react";
// import DashboardRouter from './DashboardRouter';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

import { connect } from "react-redux";
import { logout } from "../actions/session";

import Header from "./Header";
import Footer from "./Footer";

import { MyTestStore } from './App'


const mapStateToProps = ({ session }) => ({
  session
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});



const SidebarBrand = styled.div`
position: relative;
display: flex;
align-items: center;
padding: 0 16px;
height: 50px;
background-color: rgba(0, 0, 0, 0.15);
`;

const SidebarBrandIcon = styled.i`
margin-top: 2px;
font-size: 14px;
color: rgba(255, 255, 255, 0.5);
`;

const SidebarBrandLink = styled.a`
font-size: 18px;
font-weight: bold;
color: #FFF;
margin: 0 15px;
letter-spacing: 1.5px;
`;

const SidebarBrandClose = styled.i`
position: absolute;
right: 8px;
top: 8px;
visibility: visible;
color: rgba(255, 255, 255, 0.5);
cursor: pointer;

@media only screen and (min-width: 46.875em) {
visibility: hidden;
}
`;

const SidebarNavProfile = styled.div`
display: flex;
align-items: center;
min-height: 90px;
background-color: rgba(255, 255, 255, 0.1);
`;

const SidebarNavProfileAvatar = styled.div`
background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1609106/headshot.png");
background-size: cover;
background-repeat: no-repeat;
border-radius: 50%;
border: 2px solid rgba(255, 255, 255, 0.2);
height: 64px;
width: 64px;
margin: 0 15px;
`;

const SidebarNavProfileTitle = styled.div`
font-size: 17px;
letter-spacing: 1px;
`;

const NavList = styled.ul`
width: 240px;
padding: 0;
margin: 0;
background-color: #252429;
list-style-type: none;
`;

const NavListHeading = styled.li`
position: relative;
display: flex;
align-items: center;
justify-content: space-between;
padding: 16px 16px 3px;
color: rgba(255, 255, 255, 0.5);
text-transform: uppercase;
font-size: 15px;
`;

const NavListSubHeadingIcon = styled.span`
display: flex;
align-items: center;
justify-content: center;
font-size: 12px;
color: rgba(255, 255, 255, 0.5);
width: 12px;
`;

const NavListSubHeadingTitle = styled.span`
margin: 0 15px;
`;

const SubListItem = styled.div`
padding: 8px;
text-transform: capitalize;
padding: 8px 30px;
color: #D3D3D3;

&:first-child {
padding-top: 15px;
}

&:hover {
background-color: #333234;
cursor: pointer;
}
`;

const Admin = ({ logout, session }) => {
    const {user, setState} = useContext(MyTestStore)

    // setState((current_state) => ({ ...current_state, myNewVar: '123' }))

    const [expandedMenuArray, setExpandedMenuArray] = useState([])
    console.log({expandedMenuArray})
    return (

    <>
    <Header/>

    <aside className="sidenav">

    <SidebarBrand>
    <SidebarBrandIcon className="fas fa-feather-alt" />
    <SidebarBrandLink href="#">Ux<span className="text-light">Pro</span></SidebarBrandLink>
    <SidebarBrandClose className="fas fa-times sidenav__brand-close"></SidebarBrandClose>
    </SidebarBrand>

    <SidebarNavProfile>
    <SidebarNavProfileAvatar />
    <SidebarNavProfileTitle className="text-light">Matthew H</SidebarNavProfileTitle>
    </SidebarNavProfile>

    <div className="row row--align-v-center row--align-h-center">
    <NavList>

        <NavListHeading>content hub<i className="far fa-edit"></i></NavListHeading>
        <li>
            <div className="navList__subheading row row--align-v-center" onClick={() => {
                if(expandedMenuArray.includes('films')){
                    setExpandedMenuArray(expandedMenuArray.filter(item => item!=='films'))
                } else {
                    setExpandedMenuArray([...expandedMenuArray, 'films'])
                }
                }}>
                <NavListSubHeadingIcon><i className="fas fa-film"></i></NavListSubHeadingIcon>
                <NavListSubHeadingTitle>films</NavListSubHeadingTitle>
            </div>
            <div className={"subList" + (expandedMenuArray.includes('films') ? "" : " subList--hidden")}>
                <NavLink to="/all"><SubListItem>all films</SubListItem></NavLink>
                <NavLink to="/dashboard/films/add"><SubListItem>add film</SubListItem></NavLink>
            </div>
        </li>

        <li>
            <div className="navList__subheading row row--align-v-center" onClick={() => {
                if(expandedMenuArray.includes('soon')){
                    setExpandedMenuArray(expandedMenuArray.filter(item => item!=='soon'))
                } else {
                    setExpandedMenuArray([...expandedMenuArray, 'soon'])
                }
                }}>
                <NavListSubHeadingIcon><i className="fas fa-video"></i></NavListSubHeadingIcon>
                <NavListSubHeadingTitle>coming soon</NavListSubHeadingTitle>
            </div>
            <div className={"subList" + (expandedMenuArray.includes('soon') ? "" : " subList--hidden")}>
                <NavLink to=""><SubListItem>all films</SubListItem></NavLink>
            </div>
        </li>
        
        <li>
            <div className="navList__subheading row row--align-v-center" onClick={() => {
                if(expandedMenuArray.includes('reviews')){
                    setExpandedMenuArray(expandedMenuArray.filter(item => item!=='reviews'))
                } else {
                    setExpandedMenuArray([...expandedMenuArray, 'reviews'])
                }
                }}>
                <NavListSubHeadingIcon><i className="far fa-star"></i></NavListSubHeadingIcon>
                <NavListSubHeadingTitle>reviews</NavListSubHeadingTitle>
            </div>
            <div className={"subList" + (expandedMenuArray.includes('reviews') ? "" : " subList--hidden")}>
                <NavLink to=""><SubListItem>all reviews</SubListItem></NavLink>
                <NavLink to=""><SubListItem>add review</SubListItem></NavLink>
            </div>
        </li>


        <NavListHeading>messages<i className="far fa-envelope"></i></NavListHeading>
        <li>
            <div className="navList__subheading row row--align-v-center">
                <NavListSubHeadingIcon><i className="fas fa-envelope"></i></NavListSubHeadingIcon>
                <NavListSubHeadingTitle>inbox</NavListSubHeadingTitle>
            </div>
            <div className="subList subList--hidden">
                <SubListItem>primary</SubListItem>
                <SubListItem>social</SubListItem>
                <SubListItem>promotional</SubListItem>
            </div>
        </li>
        <li>
            <div className="navList__subheading row row--align-v-center">
                <NavListSubHeadingIcon><i className="fas fa-eye"></i></NavListSubHeadingIcon>
                <NavListSubHeadingTitle>unread</NavListSubHeadingTitle>
            </div>
            <div className="subList subList--hidden">
                <SubListItem>primary</SubListItem>
                <SubListItem>social</SubListItem>
                <SubListItem>promotional</SubListItem>
            </div>
        </li>
        <li>
            <div className="navList__subheading row row--align-v-center">
                <NavListSubHeadingIcon><i className="fas fa-book-open"></i></NavListSubHeadingIcon>
                <NavListSubHeadingTitle>archives</NavListSubHeadingTitle>
            </div>
            <div className="subList subList--hidden">
                <SubListItem>primary</SubListItem>
                <SubListItem>social</SubListItem>
                <SubListItem>promotional</SubListItem>
            </div>
        </li>

    </NavList>
    </div>
    </aside>


    <Footer/>
</>
)};
      
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Admin);