import React from "react";
import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';
import SideNav from './Side';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100vh;
    }
`;

const Container = styled.div`
    height: 100vh;
`;

const Page = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 50px 1fr 50px;
    grid-template-areas: 'header' 'main' 'footer';
    height: 100vh;
    overflow-x: hidden;

    @media (min-width: 1200px) {
        display: grid;
        grid-template-columns: 240px calc(100% - 240px);
        grid-template-rows: 50px 1fr 50px;
        grid-template-areas: 'sidenav header' 'sidenav main' 'sidenav footer';
        height: 100vh;
    }
`;

const Main = styled.div`
    grid-area: main;
    background-color: #8fd4d9;
`;

const AdminPage = ({ logout, session, children }) => (
    <>
     <GlobalStyle/>
     <Container>
        <Page>
            <Header/>
            <SideNav/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </Page>
    </Container>
    </>
);
export default (AdminPage);
      