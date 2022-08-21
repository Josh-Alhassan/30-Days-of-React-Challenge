import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import './style.css';

// import App from './App';

// Injecting Data into JSX
const welcome = 'Welcome to 30 Days Of React';
const title = 'Getting Started React';
const subtitle = 'JavaScript Library';
const author = {
  firstName: 'Joshua',
  lastName: 'Alhassan',
};
const date = 'Aug 20, 2022';

// React component
// Rendering components
// Functional Component
const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Student of React: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
);

const numOne = 3;
const numTwo = 2;

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1998;
const currentYear = 2022;
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// User Card Component - Implicit return
const UserCard = () => (
  <div className='user-card'>
    <img src="https://drive.google.com/file/d/1ou4MaaVbTfNUWEiXvB_7ji_2EIMvySJ-/view?usp=sharing" alt="Photo of Joshua" />
    <h2>{author.firstName} {author.lastName}</h2>
  </div>
)

// TechList component
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript'];
  const techsFormated = techs.map((tech) => <li key={tech}> {tech} </li>)
  return techsFormated;
}

// Main Component
const Main = () => (
  <main>
    <div className="main-wrapper">
      <p>Prerequisite to get started {' '}
        <strong>
          <em> react.js </em>
        </strong>
        :
      </p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
    </div>
  </main>
)

// Footer Component
const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright 2022</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
)

const rootElement = document.getElementById('root');
// we render the JSX element using the ReactDOM package
// ReactDOM has the render method and the render method takes two argument
ReactDOM.render(<App />, rootElement);
// or
//  ReactDOM.render([header, main, footer], rootElement)

// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
