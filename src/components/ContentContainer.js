import "../styles/ContentContainer.css";

import React, { Component } from "react";

import Form from "./Form";

class ContentContainer extends Component {
  render() {
    return (
      <div className="contentContainer">
        <Form user={this.props.user} />
      </div>
    );
  }
}

export default ContentContainer;
