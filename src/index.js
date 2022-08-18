import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import './style.css';

// import App from './App';

// Injecting Data into JSX
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Joshua',
  lastName: 'Alhassan',
}
const date = 'Aug 18, 2022'

// const headerStyles = {
//   backgroundColor: '#61DBFB',
//   fontFamily: 'Helvetica Neue',
//   padding: 25,
//   lineHeight: 1.5,
// }

const header = (
  <header 
  // style={headerStyles}
  >
    <div className="header-styles">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>Student: {author.firstName} {author.lastName}</p>
      <small>{date}</small>
    </div>
  </header>
);

// JSX element, main
// const mainStyles = {
//   backgroundColor: '#F3F0F5',
// }

// Injecting Data into JSX
const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)
const main = (
  <main 
    // style={mainStyles}
  >
    <div className="main-wrapper">
      <p>Prerequisite to get started react.js:</p>
      <ul>
        {techsFormatted}
      </ul>
      {result}
      {personAge}

    </div>
  </main>
);

// const footerStyles = {
//   backgroundColor: '#61DBFB',
// }

// JSX element, footer
const footer = (
  <footer 
    // style={footerStyles}
  >
    <div className="footer-wrapper" >
      <p>Copyright 2020</p>

    </div>
  </footer>
);

// JSX element, app, a container or a parent
const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById('root');
// we render the JSX element using the ReactDOM package
// ReactDOM has the render method and the render method takes two argument
ReactDOM.render(app, rootElement);
// or
//  ReactDOM.render([header, main, footer], rootElement)

// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
