import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVQus4Wwzeh7LspUMy1k2kxSG7GzEU77w",
  authDomain: "cart-b87ec.firebaseapp.com",
  projectId: "cart-b87ec",
  storageBucket: "cart-b87ec.appspot.com",
  messagingSenderId: "599266661395",
  appId: "1:599266661395:web:aac196b374131cb6205be6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

