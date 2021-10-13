import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {createTheme, ThemeProvider} from '@material-ui/core';
import PageSelect from './pages/Audit/PageSelect';
import SignUp from './pages/SignUp/SignUp';
import Error from './pages/404/Error';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import LogIn from './pages/LogIn/LogIn';
import axios from 'axios';
import Cookies from 'js-cookie';

import StoreProvider, {StoreContext} from './pages/Audit/constantStore';


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
    return (
        <ThemeProvider theme={theme}>
            <ReactNotification/>
            <StoreProvider>
                <Router>
                    <Routes/>
                </Router>
                <CheckAuth/>
            </StoreProvider>
        </ThemeProvider>

    );
}

const Routes = () => {
    const storeConstant = React.useContext(StoreContext);
    return (
        <Switch>
            <ProtectedLogin path="/login" component={LogIn} auth={storeConstant.auth}/>
            <ProtectedRoute path="/audit" component={PageSelect} auth={storeConstant.auth}/>
            <ProtectedSignup path="/signup" component={SignUp} auth={storeConstant.auth}/>
            <Route component={PageSelect} path="/debug"/>
            <Route component={Error}/>
        </Switch>
    )
}

const CheckAuth = () => {
    const storeConstant = React.useContext(StoreContext);
    // const {auth, setAuth} = storeConstant;
    axios.defaults.withCredentials = true;
    const readCookie = () => {
        const user = Cookies.get("jwt");
        if (user) {
            axios.get('http://192.168.227.21:8000/auth/signedin/')
                .then(res => {
                    console.log(res)
                    storeConstant.setAuth(true)
                }).catch(function (error) {
                console.log(error)
                storeConstant.setAuth(false)
            })
        }
    }
    React.useEffect(() => {
        readCookie();
        // eslint-disable-next-line
    }, [])

    return null;
}

const ProtectedRoute = (
    {
        auth, component:
        Component,
        ...rest
    }
) => {
    return (
        <Route
            {...rest}
            render={() => auth ? (
                <Component/>
            ) : (
                <Redirect to="/login"/>
            )
            }
        />
    )
}

const ProtectedLogin = (
    {
        auth, component:
        Component,
        ...rest
    }
) => {
    return (
        <Route
            {...rest}
            render={() => !auth ? (
                <Component/>
            ) : (
                <Redirect to="/audit"/>
            )
            }
        />
    )
}

const ProtectedSignup = (
    {
        auth, component:
        Component,
        ...rest
    }
) => {
    return (
        <Route
            {...rest}
            render={() => !auth ? (
                <Component/>
            ) : (
                <Redirect to="/audit"/>
            )
            }
        />
    )
}


export default App;
