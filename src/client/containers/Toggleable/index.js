import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Toggleable from 'react-toggleable';

class ToggleableContainer extends Component {
  render() {
    return (
      <div>
        <h1>Toggleable Container</h1>
        <hr />
        <h4>Checkbox</h4>
        <Toggleable>
          {({ on, toggle }) => (
            <input type="checkbox" checked={on} onClick={toggle} />
          )}
        </Toggleable>
        <h4>Radio</h4>
        <Toggleable initialOn>
          {({ on, toggle }) => (
            <input type="radio" checked={on} onClick={toggle} />
          )}
        </Toggleable>
        <h4>Show/Hide</h4>
        <Toggleable>
          {({ on, toggle }) => (
            <a href="#" onClick={toggle}>
              {on ? 'Show text' : 'Hide text'}
            </a>
          )}
        </Toggleable>
        <p>
          <Link to="/">App</Link>
        </p>
      </div>
    );
  }
}

export default ToggleableContainer;
