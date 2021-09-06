import './App.css';
import Container from '@material-ui/core/Container'

import { createTheme, ThemeProvider } from '@material-ui/core';


//Local Components
import LoginPage from './LoginPage.js';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4747',
    },
    secondary: {
      main: '#00000'
    },
    background: {
      paper: '#D8D8DF',
      default: '#252730'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.7)',
      secondary: 'rgba(0, 0, 0, 0.7)'
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
      <Container className="d-flex align-items-center justify-content-center">
        <LoginPage/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
