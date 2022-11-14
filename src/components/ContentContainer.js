import "../styles/ContentContainer.css";

import React, { Component } from "react";

import Display from "./Display";
import Form from "./Form";

class ContentContainer extends Component {
  switchViews = () => {
    if (this.props.editView) {
      return <Form user={this.props.user} />;
    }
    return <Display user={this.props.user} />;
  };
  render() {
    return <div className="contentContainer">{this.switchViews()}</div>;
  }
}

export default ContentContainer;
