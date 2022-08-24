import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import './style.css';

const Skills = (props) => {
  // modifying the skills array
  const skillList = props.skills.map((skills) => <li>{skills}</li>)
  return <ul>{skillList}</ul>
}


// The App function Component
const App = () => (
  <div className='app'>
    <Skills skills={['HTML', 'CSS', 'JavaScript'] } />
  </div>
)


const rootElement = document.getElementById('root');
// we render the JSX element using the ReactDOM package
// ReactDOM has the render method and the render method takes two argument
ReactDOM.render(<App />, rootElement);
// or
//  ReactDOM.render([header, main, footer], rootElement)
