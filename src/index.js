import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';

export const ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#ed6c02',
    },
    secondary: {
      main: '#cf78dc',
      light: '#ebb7f5',
    },
    warning: {
      main: '#906ba2',
    },
  },
};

const theme = createTheme(ThemeOptions)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

