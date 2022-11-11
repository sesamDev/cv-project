import "../styles/NavBar.css";

import React, { Component } from "react";

class NavBar extends Component {
  NavItems() {
    return (
      <div className="navItems">
        <ul>
          <li className="menuItem">Display resume</li>
          <li className="menuItem">Edit resume</li>
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
