import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Home Container</h1>
        <p>
          <Link to="/">App</Link>
        </p>
      </div>
    );
  }
}

export default App;
