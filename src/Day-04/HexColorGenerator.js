// Button Component
const buttonStyles = {
  padding: '10px 20px',
  background: 'rgb(0, 255, 0)',
  border: 'none',
  borderRadius: 5,
};

const Button = () => <button style={buttonStyles}> action </button>;

// Hexadecimal Color Generator
const hexaColor = () => {
  let str = '0123456789abcdef';
  let color = '';
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return '#' + color;
};

const HexaColor = () => <div>{hexaColor()}</div>;

// The App, or the parent or the container component
const App = () => (
  <div>
    <Button />
    <HexaColor />
    {/* <Footer /> */}
  </div>
);
