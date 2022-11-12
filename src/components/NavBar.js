import "../styles/NavBar.css";

import React, { Component } from "react";

class NavBar extends Component {
  navItems = () => {
    return (
      <div className="navItems">
        <h2>Curriculum vitae</h2>
        <ul>
          <li className="menuItem" id="printButton" onClick={this.props.handleButtonClick}>
            Print
          </li>
          <li className="menuItem" id="editButton" onClick={this.props.handleButtonClick}>
            Edit
          </li>
        </ul>
      </div>
    );
  };

  render() {
    return <div className="navBar">{this.navItems()}</div>;
  }
}

export default NavBar;
