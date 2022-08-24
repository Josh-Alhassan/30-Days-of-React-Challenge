import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import './style.css';

const Status = (props) => {
  let status = props.status ? 'Old enough to drive' : 'Too young for driving'
  return <p>{status} </p>
}


// The App function Component
const App = () => {
  let currentYear = 2022;
  let birthYear = 1998;
  const age = currentYear - birthYear;
  
  let status = age >= 18

  return (
    <div className="app" >
      <Status status={status} />
    </div>
  )
}


const rootElement = document.getElementById('root');
// we render the JSX element using the ReactDOM package
// ReactDOM has the render method and the render method takes two argument
ReactDOM.render(<App />, rootElement);
