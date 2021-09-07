import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { createTheme, ThemeProvider } from '@material-ui/core';
import PageSelect from './pages/PageSelect';
import SignUp from './pages/SignUp/SignUp'

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

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
      <ReactNotification />
      <Router>
        <Switch>
          <Route 
            exact path="/"
            component={Home}
          />
          <Route
           path="/login" 
           component={PageSelect}
          />
          <Route
           path="/signup" 
           component={SignUp}
          />
          <Route
           path="/audit" 
           component={PageSelect}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
