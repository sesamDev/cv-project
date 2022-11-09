import { Component } from "react";
import '../styles/CvBody.css'
import CvCard from "./CvCard";


class CvBody extends Component{
constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="CvBody">Hello {this.props.user.personalInfo.firstName} <CvCard/>
        <CvCard/>
        <CvCard/>
    </div>)
  }
}

export default CvBody;
