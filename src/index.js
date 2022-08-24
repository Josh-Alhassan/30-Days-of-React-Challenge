import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import './style.css';

const Header = (props) => {
  console.log(props)
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>
          {props.firstName} {props.lastName}
        </p>
        <small>{props.date}</small>
      </div>
    </header>
  )
}

// The App function Component
const App = () => {
  return (
    <div className="app" >
      <Header 
        welcome="Welcome to 30 Days of React"
        title="Getting Started with React"
        subtitle="JavaScript Library"
        firstName="Joshua"
        lastName="Alhassan"
        date="Aug 24, 2022"
      />
    </div>
  )
}


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
