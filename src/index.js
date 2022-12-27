import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import AppClass from "./AppClass";
import  Component from "./components/component" 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={Component}/>   
    {/* change the above line - for interchaning between App and AppClass */}
  </React.StrictMode>
);
