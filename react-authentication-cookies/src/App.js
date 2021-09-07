import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Cookies from 'js-cookie';

import AuthApi from './AuthApi';

const App = () => {
  const [auth, setAuth] = useState(false)
  const readCookie = () => {
    const user = Cookies.get("user");
    if (user) {
      setAuth(true);
    }
  }
  React.useEffect(() => {
    readCookie();
  }, [])

  return (
    <div>
      <AuthApi.Provider value={{auth, setAuth}}>
        <Router>
          <Routes/>
        </Router>
      </AuthApi.Provider>
    </div>
  )
}

const Login = () => {
  const Auth = React.useContext(AuthApi)
  const handleOnClick = () => {
    Auth.setAuth(true);
    Cookies.set("user", "loginTrue", { secure: true, sameSite: 'Strict' });
  }
  return(
    <div>
    <h1>Welcome</h1>
    <button onClick={handleOnClick}>Log In</button>
    </div>
  )
}

const Dashboard = () => {
  const Auth = React.useContext(AuthApi)

  const handleOnClick = () => {
    Auth.setAuth(false);
    Cookies.remove("user", { secure: true, sameSite: 'Strict' });
  }
  return(
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleOnClick}>Log Out</button>
    </div>
  )
}

const Routes = () => {
  const Auth = React.useContext(AuthApi)
  return(
    <Switch>
      <ProtectedLogin path="/login" component={Login} auth={Auth.auth}/>
      <ProtectedRoute path="/dashboard" auth={Auth.auth} component={Dashboard}/>
    </Switch>
  )
}

const ProtectedRoute = ({auth, component:Component, ...rest}) => {
  return(
    <Route
    {...rest}
    render = {()=> auth? (
      <Component/>
    ):
      (
        <Redirect to="/login"/>
      )
    }
    />
  )
}

const ProtectedLogin = ({auth, component:Component, ...rest}) => {
  return(
    <Route
    {...rest}
    render = {()=> !auth? (
      <Component/>
    ):
      (
        <Redirect to="/Dashboard"/>
      )
    }
    />
  )
}


export default App;
