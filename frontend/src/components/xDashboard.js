import React from "react";
import styled from "styled-components";
import { APIContextProvider } from "./xapiContext";

import Movies from "./xMovies";

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
display:grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px auto;
  height: 100vh;
  margin: 0;
  grid-template-areas: "movies movies" "overview office";
  padding: 20px;
`;

const Updates = styled.div`
  grid-area: updates;
  box-shadow: 0 1px 0 0 #eaedf3;
  background: purple;
`;

const Dashboard = ({ logout, session }) => (
<>
<APIContextProvider>

 <MainContainer>
        <Movies/>
        <div class="overview"></div>
                <div class="office"></div>
</MainContainer>
<Updates/>
</APIContextProvider>
</>
);
export default (Dashboard);
  