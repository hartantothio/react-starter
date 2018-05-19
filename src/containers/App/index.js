import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <h1>App Container</h1>
        <p>
          <Link to="/home">Home</Link>
        </p>
      </div>
    );
  }
}

export default App;
