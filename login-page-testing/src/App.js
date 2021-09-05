import './App.css';
import Container from '@material-ui/core/Container'

import { createTheme, ThemeProvider } from '@material-ui/core';


//Local Components
import LoginPage from './LoginPage';

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
      <Container className="d-flex align-items-center justify-content-center">
        <LoginPage/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
