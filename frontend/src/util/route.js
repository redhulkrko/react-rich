import React, { useContext } from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";
import { MyTestStore } from '../components/App'

const mapStateToProps = ({ session: { userId} }) => ({
  loggedIn: Boolean(userId)
});

const Auth = ({ path, component: Component }) => {
  
  const { user, setState } = useContext(MyTestStore)
  const loggedIn = !!user
  console.log(loggedIn)
  return (
  <Route
    path={path}
    render={props => (
      loggedIn ?
      <Redirect to='/dashboard' /> :
      <Component {...props} />
    )}
  />
)}

export const ProtectedRoute = ({ path, component: Component, layout: Layout, ...rest }) => {
  const { user, setState } = useContext(MyTestStore)
  const loggedIn = !!user
  console.log({loggedIn})
  return (
  <Route
    {...rest}
    path={path}
    render={props => (
      loggedIn ?
      <Layout> 
        <Component {...props} /> 
      </Layout> :
      <Redirect to='/login' />
    )}
  />
)}

export const AuthRoute = withRouter(
  connect(mapStateToProps)(Auth)
);

// export const ProtectedRoute = withRouter(
//   connect(mapStateToProps)(Protected)
// );