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
          firstName: "",
          lastName: "",
          adress: "",
          zipCode: "",
          city: "",
          phone: "",
          id: uniqid(),
        },
        education: {
          schools: [],
        },
        experience: {
          jobs: [],
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

  // handleJobChange = (e)=>{
  //   e.preventDefault();
  //   const target = e.target.id
  //   this.setState({
  //     user:{
  //       experience
  //     }

  //   })
  // }

  handleChange = (e) => {
    e.preventDefault();

    this.setState(() => {
      return {
        user: {
          personalInfo: {
            firstName: e.target.id === "firstName" ? e.target.value : this.state.user.personalInfo.firstName,
            lastName: e.target.id === "lastName" ? e.target.value : this.state.user.personalInfo.lastName,
            adress: e.target.id === "adress" ? e.target.value : this.state.user.personalInfo.adress,
            zipCode: e.target.id === "zipCode" ? e.target.value : this.state.user.personalInfo.zipCode,
            city: e.target.id === "city" ? e.target.value : this.state.user.personalInfo.city,
            phone: e.target.id === "phone" ? e.target.value : this.state.user.personalInfo.phone,
          },
        },
      };
    });

    console.log(this.state.user);
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
        <ContentContainer
          className="contentContainer"
          editView={this.state.editView}
          user={this.state.user}
          handleChange={this.handleChange}
        />
        <PageFooter className="pageFooter" />
      </div>
    );
  }
}

export default App;
