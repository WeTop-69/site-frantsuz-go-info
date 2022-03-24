import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD-9FbXiD24pnCKVY-kxWmzbJZzfWsaq_M",
  authDomain: "fir-taxi-8d278.firebaseapp.com",
  projectId: "fir-taxi-8d278",
  storageBucket: "fir-taxi-8d278.appspot.com",
  messagingSenderId: "869454357762",
  appId: "1:869454357762:web:f8ca5d051f03b5747d0e1b"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
