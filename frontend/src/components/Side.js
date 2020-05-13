import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

// import { connect } from "react-redux";
// import { logout } from "../actions/session";

// const mapStateToProps = ({ session }) => ({
//   session
// });

// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch(logout())
// });

const GlobalStyle = createGlobalStyle`

    .navlist {
        width: 240px;
        padding: 0;
        margin: 0;
        background-color: #394263;
        list-style-type: none;
    }

    .navlist .sublist {
        padding: 0;
        margin: 0;
        list-style-type: none;
        background-color: #262c43;
        visibility: visible;
        overflow: hidden;
        max-height: 200px;
        transition: all .4s ease-in-out;
    }

    .navlist-subheading {
        position: relative;
        padding: 10px 30px;
        color: #fff;
        font-size: 16px;
        text-transform: capitalize;
    }

    .navlist-subheading:after {
        position: absolute;
        content: "";
        height: 6px;
        width: 6px;
        top: 17px;
        right: 25px;
        border-left: 1px solid rgba(255, 255, 255, 0.5);
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        transform: rotate(225deg);
        transition: all .2s;
    }

    .navlist-subheading:hover {
        background-color: #303753;
        cursor: pointer;
    }

    .navlist-subheading-open {
        background-color: #303753;
    }
    
    .navlist-subheading-open:after {
        transform: rotate(315deg);
    }

    .sublist {
        list-style-type: none;
        margin: 0;
        padding: 10px 0 0;
    }
    
    .row {
        display: flex;
    }
    
    .row-align-v {
        align-items: center;
    }
    
    .row-align-h {
        justify-content: center;
    }

    .navlist .sublist-hidden {
        visibility: hidden;
        max-height: 0;
    }
`;

const SidebarNav = styled.div`
    position: fixed;
    grid-area: sidenav;
    height: 100%;
    overflow-y: auto;
    background-color: #394263;
    color: #FFF;
    width: 240px;
    transform: translateX(-245px);
    transition: all .6s ease-in-out;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
    z-index: 2;

    @media (min-width: 1200px) {
        position: relative;
        transform: translateX(0);
    }
`;

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
    background-image: url("../img/avatar.png");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    border: 2px solid #8e95a8;
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


const SideNav = () => {


const [expandedMenuArray, setExpandedMenuArray] = useState([])
console.log({expandedMenuArray})

return (
<>
<GlobalStyle/>
<SidebarNav>

<SidebarBrand>
    <SidebarBrandIcon className="fas fa-feather-alt" />
    <SidebarBrandLink href="#">Ux<span className="text-light">Pro</span></SidebarBrandLink>
    <SidebarBrandClose className="fas fa-times sidenav__brand-close"></SidebarBrandClose>
</SidebarBrand>

<SidebarNavProfile>
    <SidebarNavProfileAvatar />
    <SidebarNavProfileTitle>RB</SidebarNavProfileTitle>
</SidebarNavProfile>

<div className="row row-align-v row-align-h">
<div className="navlist">

    <NavListHeading>Navigate</NavListHeading>
    <li>
        <div className="navlist-subheading row row-align-v" onClick={() => {
            if(expandedMenuArray.includes('films')){
                setExpandedMenuArray(expandedMenuArray.filter(item => item!=='films'))
            } else {
                setExpandedMenuArray([...expandedMenuArray, 'films'])
            }
            }}>
            <NavListSubHeadingIcon><i className="fas fa-home"></i></NavListSubHeadingIcon>
            <NavListSubHeadingTitle>Dashboard</NavListSubHeadingTitle>
        </div>
        <div className={"sublist" + (expandedMenuArray.includes('films') ? "" : " sublist-hidden")}>
            <NavLink to="/dashboard/films"><SubListItem>all films</SubListItem></NavLink>
            <NavLink to="/dashboard/films/add"><SubListItem>add film</SubListItem></NavLink>
        </div>
    </li>

    <li>
        <div className="navlist-subheading row row-align-v" onClick={() => {
            if(expandedMenuArray.includes('soon')){
                setExpandedMenuArray(expandedMenuArray.filter(item => item!=='soon'))
            } else {
                setExpandedMenuArray([...expandedMenuArray, 'soon'])
            }
            }}>
            <NavListSubHeadingIcon><i className="fas fa-film"></i></NavListSubHeadingIcon>
            <NavListSubHeadingTitle>Films</NavListSubHeadingTitle>
        </div>
        <div className={"sublist" + (expandedMenuArray.includes('soon') ? "" : " sublist-hidden")}>
            <NavLink to=""><SubListItem>all films</SubListItem></NavLink>
        </div>
    </li>
    
    <li>
        <div className="navlist-subheading row row-align-v" onClick={() => {
            if(expandedMenuArray.includes('reviews')){
                setExpandedMenuArray(expandedMenuArray.filter(item => item!=='reviews'))
            } else {
                setExpandedMenuArray([...expandedMenuArray, 'reviews'])
            }
            }}>
            <NavListSubHeadingIcon><i className="far fa-star"></i></NavListSubHeadingIcon>
            <NavListSubHeadingTitle>reviews</NavListSubHeadingTitle>
        </div>
        <div className={"sublist" + (expandedMenuArray.includes('reviews') ? "" : " sublist-hidden")}>
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

</div>
</div>
</SidebarNav>
</>
)
};
export default (SideNav);
  