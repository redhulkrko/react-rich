import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./xApp.css";
import "../script";

import { AuthRoute, ProtectedRoute } from "../util/route";
import AddFilm from "./AddFilm";
import Films from "./xFilms";
import Welcome from "./Welcome";
import Login from "./Login";
import Signup from "./Signup";
import Admin from "./xAdmin";
import Dashboard from "./xDashboard";
import AdminPage from "./xPage";
import Create from "./Create";
import Edit from "./Edit";
import Show from "./Show";
import List from "./List";
const history = createBrowserHistory();





// import { connect } from "react-redux";


export const MyTestStore = React.createContext({})

// const mapStateToProps = ({ session: { userId} }) => ({
//     loggedIn: Boolean(userId)
//   });

  
export default ((props) => {
    const [state, setState] = useState({})

    
  const loggedIn = !!state.user

    return (
  <>
    <MyTestStore.Provider value={{...state, setState}}>
      <Router history={history}>
        <Switch>
        <Route exact path="/add" component={Create} />
        <Route exact path="/edit/:_id" component={Edit} />
        <Route path="/list" component={List} />
        <Route exact path='/show/:_id' component={Show} />
        <Route exact path="/" component={Welcome} />
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/signup" component={Signup} />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} layout={AdminPage} />

        <ProtectedRoute exact path="/dashboard/films" component={Films} layout={AdminPage} />

        <ProtectedRoute path="/dashboard/films/add" component={AddFilm} layout={AdminPage} />
        {loggedIn && <Admin /> || null }
        </Switch>
      </Router>
    </MyTestStore.Provider>
  </>
)})


