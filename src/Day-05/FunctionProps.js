import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import './style.css';

// This component shows month, date and year as an alert box

// Function to display time in Mon date, year format eg Oct 4, 2020
const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

// A button component

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const handleTime = () => {
    alert(showDate(new Date()))
  }
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2022')
  }
  return (
    <div className='app'>
      <Button text='show time' onClick={handleTime} />
      <Button text='Greet People' onClick={greetPeople} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)