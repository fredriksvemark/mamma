import React, { Component } from 'react';
import './App.css';
import NavLink from './pages/NavLink';


class App extends Component {

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <h3>Artist</h3>
          <h1>Malgorzata Rydz Svemark</h1>
            <div className='navButtons'>
              <button className='navButton'><NavLink to="/main">START</NavLink></button>
              <button className='navButton'><NavLink to="/paintings">PAINTINGS</NavLink></button>
              <button className='navButton'><NavLink to="/about">ARTIST</NavLink></button>
              <button className='navButton'><NavLink to="/contact">CONTACT</NavLink></button>
            </div>
        </div>

        {this.props.children}

      </div>
    );
  }
}

export default App;
