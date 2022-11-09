import { Component } from 'react'
import './App.css'
import CvBody from './components/CvBody'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        personalInfo: {
          firstName: 'Sebastian',
          lastName: '',
          adress: '',
          zipCode: '',
          city: '',
          phone: '',
        },
      },
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      user: {},
    })
  }

  render() {
    return (
      <div className='App'>
        <CvBody user={this.state.user}/>
      </div>
    )
  }
}

export default App
