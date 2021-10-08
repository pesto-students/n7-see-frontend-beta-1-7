import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import './index.css';
import './assets/autumn-in-november.regular.ttf';
import store from './store';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { ThemeProvider } from '@material-ui/core/styles';
ReactDOM.render(
  (
    // <React.StrictMode>
    // "scripts": {
    //   "start": "react-scripts start",
    //   "build": "react-scripts build",
    //   "test": "react-scripts test",
    //   "eject": "react-scripts eject"
    // },
    <BrowserRouter>
      <Provider store={store}>
        <CssBaseline />
        <App />
      </Provider>
    </BrowserRouter>
  // </React.StrictMode>
  ),
  document.getElementById('root')
);
// reportWebVitals();
