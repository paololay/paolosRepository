import name from './name2.png';
import logo from './mememe.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="topnav">
        <div className="logo-container">
          <img src={name} className="logo-top-left" alt="logo-top-left" />
        </div>
        <a className="active" href="#home">Home</a>
        <a href="#news">About</a>
        <a href="#contact">Experience</a>
        <a href="#about">Random</a>
      </div>

      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>This is my portfolio</p>
        
      </header>
    </div>
  );
}

export default App;
