import "../styles/Form.css";

import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      education: [],
    };
  }
  increaseJobForms = () => {
    this.setState({ jobs: [].concat(this.state.jobs, this.experienceForm()) });
  };

  increaseEducationForms = () => {
    this.setState({ education: [].concat(this.state.education, this.educationForm()) });
  };
  appendExperienceForm = () => {
    if (this.state.jobs.length <= 0) {
      return <div className="experience-container">Click add experience</div>;
    }
    return Object.keys(this.state.jobs).map((job) => {
      return <div key={job}>{this.state.jobs[job]}</div>;
    });
  };

  appendEducationForm = () => {
    if (this.state.jobs.length <= 0) {
      return <div className="experience-container">Click add education</div>;
    }
    return Object.keys(this.state.education).map((school) => {
      return <div key={school}>{this.state.education[school]}</div>;
    });
  };
  experienceForm = () => {
    return (
      <div className="experienceForm">
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
    const experience = this.props.user.experience;
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
              <input type="text" name="firstName" id="firstName" />
            </div>
            <div>
              <label htmlFor="lastName">Last name</label>
              <input type="text" name="lastName" id="lastName" />
            </div>
            <div>
              <label htmlFor="adress">Address</label>
              <input type="text" name="adress" id="adress" />
            </div>
            <div>
              <label htmlFor="zipCode">Zip Code</label>
              <input type="text" name="zipCode" id="zipCode" />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input type="text" name="city" id="city" />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input type="text" name="phone" id="phone" />
            </div>
          </div>
          <div className="experience">
            <button type="button" id="addExperience" onClick={this.increaseJobForms}>
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
