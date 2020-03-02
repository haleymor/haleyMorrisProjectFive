import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  render() {
    return(
      <div className="appHeader">
        <nav className="navMenu">
          <logo>TRVL JRNL</logo>
          <ul>
            <li>
              <FontAwesomeIcon icon={faHome} />
            </li>
            <li>
              <FontAwesomeIcon icon={faPlusSquare} />
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header;