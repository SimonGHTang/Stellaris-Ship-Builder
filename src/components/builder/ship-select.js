import React from 'react';

import logo from './logo.svg';


class ShipSelect extends React.Component {


    render() {
        return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        );
    }
}

export default ShipSelect;