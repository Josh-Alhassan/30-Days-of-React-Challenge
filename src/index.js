import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';

// import App from './App';

const header = (
  <header>
    <h1>Welcome to 30 Days of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Alhassan Joshua</p>
    <small>Aug 18, 2022</small>
  </header>
)

const rootElement = document.getElementById('root');

ReactDOM.render(header, rootElement)

// const root = createRoot(rootElement);






// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
