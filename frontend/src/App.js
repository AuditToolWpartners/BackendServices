import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import { createTheme, ThemeProvider } from '@material-ui/core';
import PageSelect from './pages/Audit/PageSelect';
import SignUp from './pages/SignUp/SignUp'

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import LogIn from './pages/LogIn/LogIn';
import axios from 'axios';
import Cookies from 'js-cookie'

import AuthApi from './AuthApi'


const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4747',
    },
    secondary: {
      main: '#fff'
    },
    background: {
      paper: '#252730',
      default: '#252730'
    },
    text: {
      primary: '#FFFF',
      secondary: 'rgba(255, 255, 255, 0.7)'
    },
  },
  typography: {
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
});

const App = () => {
  const [auth, setAuth] = React.useState(false);
  axios.defaults.withCredentials = true;
  const readCookie = () => {
    const user = Cookies.get("jwt");
    if (user) {
      axios.get('http://192.168.227.18:8000/auth/signedin/')
      .then(res =>{
        console.log(res)
        setAuth(true)
      }).catch(function (error) {
        console.log(error)
        setAuth(false);
        console.log(auth)
        })
    }
  }
  React.useEffect(() => {
    readCookie();
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <ReactNotification />
      <AuthApi.Provider value={{auth, setAuth}}>
        <Router>
          <Routes/>
        </Router>
      </AuthApi.Provider>
    </ThemeProvider>
  );
}

const Routes = () => {
  const Auth = React.useContext(AuthApi);
  return(
    <Switch>
      <ProtectedLogin path="/login" component={LogIn} auth={Auth.auth} />
      <ProtectedRoute path="/audit" component={PageSelect} auth={Auth.auth} />
      <ProtectedSignup path="/signup" component={SignUp} auth={Auth.auth} />
    </Switch>
  )
}

const ProtectedRoute = ({auth, component:Component, ...rest}) => {
  return(
    <Route
    {...rest}
    render = {()=> auth? (
      <Component />
    ):(
        <Redirect to="/login" />
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
      <Component />
    ):(
        <Redirect to="/audit" />
      )
  }
  />
  )
}

const ProtectedSignup = ({auth, component:Component, ...rest}) => {
  return(
    <Route
    {...rest}
    render = {()=> !auth? (
      <Component />
    ):(
        <Redirect to="/audit" />
      )
  }
  />
  )
}


export default App;
