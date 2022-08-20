import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import './Day-04/style.css';

// import App from './App';

// Injecting Data into JSX
const welcome = 'Welcome to 30 Days Of React';
const title = 'Getting Started React';
const subtitle = 'JavaScript Library';
const author = {
  firstName: 'Joshua',
  lastName: 'Alhassan',
};
const date = 'Aug 18, 2022';

// Functional Component

// JSX element, header
const header = (
  <header>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days of React</h1>
      <h2>Getting Started with React</h2>
      <h3>JavaScript Library</h3>
      <p>Alhassan Joshua</p>
      <small>Aug 20, 2022</small>
    </div>
  </header>
);

// React component
const Header = () => {
  return header;
};

const rootElement = document.getElementById('root');
// we render the JSX element using the ReactDOM package
// ReactDOM has the render method and the render method takes two argument
ReactDOM.render(<Header />, rootElement);
// or
//  ReactDOM.render([header, main, footer], rootElement)

// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
