import React, { useContext, useEffect, useState } from "react";
import { Link, Redirect, Route, withRouter } from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components';
import * as apiUtil from "../util/session";
import { MyTestStore } from './App'


const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background: linear-gradient(120deg, #59c2ff, #1270e3);
  }
`;

const Container = styled.div`
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: #fff;
  padding: 3rem 2rem;
  border-radius: 5px;
  width: 90vw;
  text-align: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, .25);

  h1 {
    font-weight: 600;
    font-size: 1.75rem;
  }

  @media (min-width: 768px) {
    width: 80vw;
    padding: 5rem;
  }

  @media (min-width: 992px) {
    width: 65vw;
    padding: 5rem 6rem;

    h1 {
      font-size: 1.95rem;
    }
  }

  @media (min-width: 1200px) {
    width: 35vw;
    padding: 4rem 3rem;

    h1 {
      font-size: 1.55rem;
    }
  }

  


`;

const LoginForm = styled.div`
  margin-top: 1.5rem;

  input {
    margin-top: 10px;
    outline: none;
    margin: 0;
    border: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    display: block;
    padding: 10px 1rem;
    width: 100%;
    font-family: inherit;
    font-size: 1.15em;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
  }
  

  @media (min-width: 768px) {
    margin-top: 2rem;

    input {
      font-size: 1.4em;
    }
  }

  @media (min-width: 992px) {
    margin-top: 1.5rem;

    input {
      font-size: 1.4em;
    }  
  }

  @media (min-width: 1200px) {
    margin-top: 1.5rem;

    input {
      font-size: 100%;
    } 
  }

  input:focus {
    border-color: #1270e3;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06);
  }
`;

const Submit = styled.input`
    cursor: pointer;
    background: linear-gradient(120deg, #59c2ff, #1270e3);
    background-size: 180%;
    color: #fff;
    font-weight: 500;
    border: none;
    transition: background .35s ease;
`;

const LoginLinks = styled.div`
  margin-top: 2rem;
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: 1fr 1fr;

  a {
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    color: #1270e3;
    transition: color .35s ease;
  }

  a:hover {
    text-decoration: underline;
    color: #666;
  }

  @media (min-width: 768px) {
    a {
      font-size: 18px;
    }
  }

  @media (min-width: 992px) {
    a {
      font-size: 18px;
    }  
  }

  @media (min-width: 1200px) {
    a {
      font-size: 14px;
    } 
  }
`;

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

export const ProtectedRoute = ({ path, component: Component }) => {
  const { user, setState } = useContext(MyTestStore)
  const loggedIn = !!user
  console.log({loggedIn})
  return (
  <Route
    path={path}
    render={props => (
      loggedIn ? 
      <Component {...props} /> :
      <Redirect to='/login' />
    )}
  />
)}

export const AuthRoute = withRouter(
  (Auth)
);

const Login = ({ errors, login }) => {
  const {loginError, setState} = useContext(MyTestStore)
  const [loginChecked, setLoginChecked] = useState(false)

  const doLogin = async (e) => {
    e.preventDefault();
    const user = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    const response = await apiUtil.login(user);
    const data = await response.json();

    console.log({response}, {data})

    if (response.ok) {
      setState({user: data, loginError: undefined})
    } else {
      setState({loginError:response.statusText})
    } 
  }
  
  useEffect(() => {
    const response = fetch('/api/session')
    .then((res) => res.json())
    .then(({user}) => {
      user && user.userId && setState({user});
      (!user || !user.userId) && setLoginChecked(true)
    })
  }, [])



  return (
    loginChecked && <>
      <GlobalStyle/>
      <Container>
      <Wrapper>
      <h1>Login</h1>
      <LoginForm>
      <p>{errors}</p>
      <form onSubmit={doLogin}>
          <input type="email" name="email" placeholder="Email"/>
          <input type="password" name="password" placeholder="Password"/>
          {loginError || null}
          <Submit type="submit" value="Login" />
      </form>
      </LoginForm>
      <LoginLinks>
        <div>
          <Link to="/signup">Sign Up?</Link>
        </div>
        <div>
          <Link to="#">Homepage</Link>
        </div>
      </LoginLinks>
      </Wrapper>
      </Container>
    </> || null
  );
};

export default Login