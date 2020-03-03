import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import Form from './Form';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      iconClicked: false,
    }
  }

  handleIconClick = () => {
    this.setState({
      iconClicked: true,
    })
  }
  render() {
    return(
      <div className="appHeader">
        {this.state.iconClicked 
          ? <Form /> 
          : 
            <nav className="navMenu wrapper">
              <p>TRVL JRNL</p>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faHome} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faPlusSquare} onClick={this.handleIconClick} />
                </li>
              </ul>
            </nav>
          }
      </div>
    )
  }
}

export default Header;