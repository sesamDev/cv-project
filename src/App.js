import "./App.css";

import { Component } from "react";
import ContentContainer from "./components/ContentContainer";
import NavBar from "./components/NavBar";
import PageFooter from "./components/PageFooter";
import React from "react";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        personalInfo: {
          firstName: "Sebastian",
          lastName: "",
          adress: "",
          zipCode: "",
          city: "",
          phone: "",
          id: uniqid(),
        },
        education: {
          ph: "",
        },
      },
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      user: {},
    });
  };

  handleButtonClick = (e) => {
    console.log(e.target);
  };
  render() {
    return (
      <div className="App">
        <NavBar className="navBar" handleButtonClick={this.handleButtonClick} />
        <ContentContainer className="contentContainer" />
        <PageFooter className="pageFooter" />
      </div>
    );
  }
}

export default App;
