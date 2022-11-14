import "../styles/Form.css";

import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    };
  }
  increaseJobForms = () => {
    this.setState({ jobs: [].concat(this.state.jobs, this.experianceForm()) });
  };
  appendExperianceForm = () => {
    return Object.keys(this.state.jobs).map((job) => {
      return <div key={job}>{this.state.jobs[job]}</div>;
    });
  };
  experianceForm = () => {
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
  experiance = () => {
    const experiance = this.props.user.experiance;
    //Can be used in print view later
    // const list = Object.keys(experiance).map((entry) => {
    //   return (
    //     <ul key={entry}>
    //       {Object.keys(experiance[entry]).map((keys) => {
    //         return <li key={keys}>{experiance[entry][keys]}</li>;
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
          <div className="experiance">
            <button type="button" id="addExperience" onClick={this.increaseJobForms}>
              Add
            </button>
            {this.appendExperianceForm()}
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
