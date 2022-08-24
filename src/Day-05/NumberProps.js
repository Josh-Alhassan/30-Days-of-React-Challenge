import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import './style.css';

const Age = (props) => <div>The person is {props.age} years old.</div>
const Weight = (props) => (
  <p>The weight of the object on earth is {props.weight} N.</p>
)


// The App function Component
const App = () => {
  let currentYear = 2022;
  let birthYear = 1998;
  const age = currentYear - birthYear;
  const gravity = 9.81;
  const mass = 75;

  return (
    <div className="app" >
      <Age age={age} />
      <Weight weight={gravity * mass} />
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
