import "../styles/NavBar.css";

import React, { Component } from "react";

class NavBar extends Component {
  NavItems() {
    return (
      <div className="navItems">
        <h2>Curriculum vitae</h2>
        <ul>
          <li className="menuItem">Print</li>
          <li className="menuItem">Edit</li>
        </ul>
      </div>
    );
  }
  render() {
    return (
      <div className="navBar">
        <this.NavItems />
      </div>
    );
  }
}

export default NavBar;
