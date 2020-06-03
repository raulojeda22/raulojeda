import React, { Component } from 'react';
import './App.css';

class App extends Component {
  stopAnimation(e) {
    e.target.classList.add("stopAnimation");
  }
  render() {
    return (
      <div className="App">
        <h1 onClick={(e) => this.stopAnimation(e)}>Raül</h1>
        <nav>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/raulojeda22">Github</a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/raul_ojeda22/">Instagram</a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/raulojeda22/">LinkedIn</a>
          <a target="_blank" rel="noopener noreferrer" href="https://donrapido.es/">Don Rápido</a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.silverand.es/">Silver and...</a>
          <a target="_blank" rel="noopener noreferrer" href="https://raulojeda22.github.io/Javascript-RPG/">Javascript RPG</a>
        </nav>
      </div>
    );
  }
}

export default App;
