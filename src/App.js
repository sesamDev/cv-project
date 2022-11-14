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
        experiance: {
          entry: {
            employer: "DHL",
            role: "Superior",
            startDate: "2008-01-07",
            endDate: "2020-01-07",
          },
          entry2: {
            employer: "ICA",
            role: "Slav",
            startDate: "2008-01-07",
            endDate: "2020-01-07",
          },
        },
      },
      editView: true,
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      user: {},
    });
  };

  handleButtonClick = (e) => {
    const button = e.target.id;
    if (button === "printButton") {
      console.log("Print button clicked");
      this.setState({
        editView: false,
      });
    }
    if (button === "editButton") {
      console.log("Edit button clicked");
      this.setState({
        editView: true,
      });
    }
  };
  render() {
    return (
      <div className="App">
        <NavBar className="navBar" handleButtonClick={this.handleButtonClick} />
        <ContentContainer className="contentContainer" editView={this.state.editView} user={this.state.user} />
        <PageFooter className="pageFooter" />
      </div>
    );
  }
}

export default App;
