import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <div class='navContainer'>
            <div class='home'>
              <li><Link to="/" >HOME</Link></li>
            </div>
            <div class='pokemon'>
              <li><Link to="/pokemon">POKEMON</Link></li>
            </div>
            <div class='history'>
              <li><Link to="/history">HISTORY</Link></li>
            </div>
            <div class='help'>
              <li><Link to="/help">HELP</Link></li>
            </div>
          </div>
        </ul>
      </nav>
    );
  }

}

export default Nav;