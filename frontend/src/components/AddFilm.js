import React from "react";
import styled from "styled-components";

// import { connect } from "react-redux";
// import { logout } from "../actions/session";

// const mapStateToProps = ({ session }) => ({
//   session
// });

// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch(logout())
// });



const MainContainer = styled.main`
grid-area: main;
background-color: #EAEDF1;
color: #394263
`;

const MainBlock = styled.div`
display: block;
column-count: 1;
column-gap: 20px;
margin: 20px;

@media only screen and (min-width: 65.625em) {
column-count: 2;
}
`;

const AddFilm = ({ logout, session }) => (
<>
 <MainContainer>
    <MainBlock>
        <h1>Add Film</h1>
    </MainBlock>
</MainContainer>
</>
);
export default (AddFilm);
  