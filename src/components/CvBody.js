import { Component } from 'react'
import '../styles/CvBody.css'
import CvCard from './CvCard'

class CvBody extends Component {
  constructor(props) {
    super(props)
  }
  setupCards() {
    const propLength = Object.keys(this.props.user).length
    for (const property in this.props.user) {
      <CvCard property={property}/>
    }
  }
  render() {
    return (
      <div className='CvBody'>
        Hello {this.props.user.personalInfo.firstName}
        {Object.keys(this.props.user).map(property=>{
          return <CvCard key={this.props.user[`${property}`].id}/>
        })}
      </div>
    )
  }
}

export default CvBody
