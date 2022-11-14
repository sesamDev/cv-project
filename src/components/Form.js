import "../styles/Form.css";

import React, { Component } from "react";

import uniqid from "uniqid";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      education: [],
      jobForms: {},
    };
  }

  increaseEducationForms = () => {
    this.setState({ education: [].concat(this.state.education, this.educationForm()) });
  };

  appendExperienceForm = () => {
    if (this.props.experience.length <= 0) {
      return <div className="experience-container">Click add experience</div>;
    }
    return this.props.experience.map((job) => {
      return (
        <div className="experienceForm" key={job.id} id={job.id}>
          <div className="textInput">
            <label htmlFor="employer">Employer</label>
            <input type="text" id="employer" />
          </div>
          <div className="textInput">
            <label htmlFor="role">Role</label>
            <input type="text" id="role" />
          </div>
          <div className="dateInput">
            <label htmlFor="startDate">Start Date</label>
            <input type="date" id="startDate" />
          </div>
          <div className="dateInput">
            <label htmlFor="endDate">End Date</label>
            <input type="date" id="endDate" />
          </div>
        </div>
      );
    });
  };

  appendEducationForm = () => {
    if (this.state.education.length <= 0) {
      return <div className="experience-container">Click add education</div>;
    }
    return Object.keys(this.state.education).map((school) => {
      return <div key={school}>{this.state.education[school]}</div>;
    });
  };

  createNewJob = () => {
    const newJob = {
      employer: "",
      role: "",
      startDate: "",
      endDate: "",
      id: uniqid(),
    };
    return newJob;
  };

  updateAppExperienceState = () => {
    this.props.handleJobChange(this.createNewJob());
  };

  educationForm = () => {
    return (
      <div className="educationForm">
        <div className="textInput">
          <label htmlFor="school">School</label>
          <input type="text" id="school" />
        </div>
        <div className="textInput">
          <label htmlFor="titleOfStudy">Title of study</label>
          <input type="text" id="titleOfStudy" />
        </div>
        <div className="dateInput">
          <label htmlFor="startDate">Start Date</label>
          <input type="date" id="startDate" />
        </div>
        <div className="dateInput">
          <label htmlFor="endDate">End Date</label>
          <input type="date" id="endDate" />
        </div>
      </div>
    );
  };
  experience = () => {
    const experience = this.props.user.personalInfoexperience;
    //Can be used in print view later
    // const list = Object.keys(experience).map((entry) => {
    //   return (
    //     <ul key={entry}>
    //       {Object.keys(experience[entry]).map((keys) => {
    //         return <li key={keys}>{experience[entry][keys]}</li>;
    //       })}
    //     </ul>
    //   );
    // });
    return null;
  };
  render() {
    return (
      <div>
        <form>
          <div className="personalInfo">
            <div>
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                defaultValue={this.props.user.personalInfo.firstName}
                onChange={this.props.handleChange}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                defaultValue={this.props.user.personalInfo.lastName}
                onChange={this.props.handleChange}
              />
            </div>
            <div>
              <label htmlFor="adress">Address</label>
              <input
                type="text"
                name="adress"
                id="adress"
                defaultValue={this.props.user.personalInfo.adress}
                onChange={this.props.handleChange}
              />
            </div>
            <div>
              <label htmlFor="zipCode">Zip Code</label>
              <input
                type="text"
                name="zipCode"
                id="zipCode"
                defaultValue={this.props.user.personalInfo.zipCode}
                onChange={this.props.handleChange}
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                defaultValue={this.props.user.personalInfo.city}
                onChange={this.props.handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                defaultValue={this.props.user.personalInfo.phone}
                onChange={this.props.handleChange}
              />
            </div>
          </div>
          <div className="experience">
            <button type="button" id="addExperience" onClick={this.updateAppExperienceState}>
              Add experience
            </button>
            {this.appendExperienceForm()}
            <button type="button" id="addEducation" onClick={this.increaseEducationForms}>
              Add education
            </button>
            {this.appendEducationForm()}
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
