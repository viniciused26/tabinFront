import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material';

let tabinTheme = createTheme({
  palette: {
    primary: {
      main: '#551f5f'
    },
    secondary: {
      main: '#e8b122'
    },
    other: {
      main: '#ec7534'
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ].join(','),
    h2: {
      fontWeight: 'bold'
    },
    h3: {
      fontWeight: 'bold'
    },
    h4: {
      fontWeight: 'bold'
    },
    subtitle1: {
      fontWeight: 'regular'
    }
  }
});

tabinTheme = responsiveFontSizes(tabinTheme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={tabinTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
