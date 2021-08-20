import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { createTheme, ThemeProvider } from '@material-ui/core';
import PageSelect from './pages/PageSelect';

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
      <Router>
        <Switch>
          <Route 
            exact path="/"
            component={Home}
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
