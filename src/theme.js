import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#15ae6f',
      contrastText: '#fff',
    },
    secondary: {
      main: '#40bbec',
      contrastText: '#fff',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#eaeaea',
    },
    text: {
      primary: '#000',
      secondary: '#fff',
    },
    custom: {
      darkBlue: {
        main: '#003366',
        contrastText: '#fff',
      },
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
});

export default theme;
