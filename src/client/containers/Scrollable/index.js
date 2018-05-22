import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Scrollable from 'react-scrollable';

class ScrollableContainer extends Component {
  renderContent() {
    const out = [];

    for (let i = 0; i < 100; i++) {
      out.push(<p>Hello World - {i}</p>);
    }

    return out;
  }

  render() {
    return (
      <div>
        <h1>Scrollable Container</h1>
        <hr />
        <Scrollable
          style={{
            background: 'yellow',
            border: '1px solid red',
            padding: '10px',
            height: '100px',
            maxHeight: '100px',
            overflowY: 'scroll'
          }}
        >
          {this.renderContent()}
        </Scrollable>
        <p>
          <Link to="/">App</Link>
        </p>
      </div>
    );
  }
}

export default ScrollableContainer;
