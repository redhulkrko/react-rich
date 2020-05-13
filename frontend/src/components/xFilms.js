import React from "react";
import styled from "styled-components";
import { APIContextProvider } from "./xapiContext";

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
  height: 100vh;
  margin: 0;
  padding: 20px;
`;

const Films = ({ logout, session }) => (
<>
<APIContextProvider>

 <MainContainer>
       <h1>Films</h1>
</MainContainer>
</APIContextProvider>
</>
);
export default (Films);
  