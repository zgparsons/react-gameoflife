import Game from './Game.js'
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Conway's Game of Life</h1>
        <p>Implemented with <a class="App-link" href="https://reactjs.org/">React</a> by <a class="App-link" href="https://zacharyparsons.co.uk">Zachary</a>, with help from <a class="App-link" href="https://www.freecodecamp.org/news/create-gameoflife-with-react-in-one-hour-8e686a410174/">this FreeCodeCamp article</a>!</p>
        <p className="secondary-p">Also inspired by <a class="App-link" href="https://www.youtube.com/watch?v=FWSR_7kZuYg">Dan Shiffman on YouTube</a>. For more information about the Game of Life see <a class="App-link" href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">here</a>.</p>
        <Game />
      </header>
      
    </div>

  );
}

export default App;
