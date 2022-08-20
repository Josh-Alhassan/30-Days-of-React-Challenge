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
const date = 'Aug 18, 2022';

// Functional Component

// JSX element, header
// const header = (
//   <header>
//     <div className="header-wrapper">
//       <h1>Welcome to 30 Days of React</h1>
//       <h2>Getting Started with React</h2>
//       <h3>JavaScript Library</h3>
//       <p>Alhassan Joshua</p>
//       <small>Aug 20, 2022</small>
//     </div>
//   </header>
// );

// React component
// Rendering components
const Header = () => (
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

// User Card Component - Implicit return
const UserCard = () => (
  <div className='user-card'>
    <img src="https://drive.google.com/file/d/1ou4MaaVbTfNUWEiXvB_7ji_2EIMvySJ-/view?usp=sharing" alt="Photo of Joshua" />
    <h2>Joshua Alhassan</h2>
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
      <p>Prerequisite to get started react.js</p>
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
