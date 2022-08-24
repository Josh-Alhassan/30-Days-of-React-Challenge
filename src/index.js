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
  const welcome = 'Welcome to Day 5 of 30 Days of React';
  const title = 'Getting Started with React';
  const subTitle = 'JavaScript Library';
  const firstName = 'Joshua';
  const lastName = 'Alhassan';
  const date = 'Aug 24, 2022';

  return (
    <div className="app" >
      <Header 
        welcome={welcome}
        title= {title}
        subtitle={subTitle}
        firstName={firstName}
        lastName={lastName}
        date={date}
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
