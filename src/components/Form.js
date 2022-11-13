import "../styles/Form.css";

import React, { Component } from "react";

// firstName: "Sebastian",
//           lastName: "",
//           adress: "",
//           zipCode: "",
//           city: "",
//           phone: "",
class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <div class="personalInfo">
            <div>
              <label for="firstName">First name</label>
              <input type="text" name="firstName" id="firstName" />
            </div>
            <div>
              <label for="lastName">Last name</label>
              <input type="text" name="lastName" id="lastName" />
            </div>
            <div>
              <label for="adress">Address</label>
              <input type="text" name="adress" id="adress" />
            </div>
            <div>
              <label for="zipCode">Zip Code</label>
              <input type="text" name="zipCode" id="zipCode" />
            </div>
            <div>
              <label for="city">City</label>
              <input type="text" name="city" id="city" />
            </div>
            <div>
              <label for="phone">Phone</label>
              <input type="text" name="phone" id="phone" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
