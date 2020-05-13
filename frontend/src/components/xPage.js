import React from "react";
import styled, { createGlobalStyle } from 'styled-components';

import Header from './xHeader';
import SideNav from './xSide';
import Footer from './xFooter';

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
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 50px 1fr 50px;
grid-template-areas:
'header'
'main'
'footer';
height: 100vh;

@media (min-width: 992px) {
  grid-template-columns: 1fr 25%;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
  'header header'
  'main updates'
  'footer footer';
}

@media (min-width: 1200px) {
    grid-template-columns: 60px 1fr 25%;
    grid-template-areas:
      "sidenav header header"
      "sidenav main updates"
      "sidenav footer footer";
}
`;


const AdminPage = ({ logout, session, children }) => (
    <>
     <GlobalStyle/>
     <Container>
        <Page>
            <Header/>
            <SideNav/>
                {children}
            <Footer/>
        </Page>
    </Container>
    </>
);
export default (AdminPage);
      