import { Component } from "react";
import '../styles/CvBody.css'
import CvCard from "./CvCard";


class CvBody extends Component{
  render(){
    return (
      <div className="CvBody">Hello MY world
        <CvCard/>
        <CvCard/>
        <CvCard/>
    </div>)
  }
}

export default CvBody;
