import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
// import Form from './Form';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      iconClicked: false,
    }
  }

  render() {
    return(
      <div className="appHeader">
        {/* left this commented out because not working properly but would like to remind myself how I was going to implement icon functionality */}
        {/* {this.state.iconClicked 
          ? <Form /> 
          :  */}
            <nav className="navMenu wrapper">
              <p>TRVL JRNL</p>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faHome} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faPlusSquare} />
                </li>
              </ul>
            </nav>
          }
      </div>
    )
  }
}

export default Header;