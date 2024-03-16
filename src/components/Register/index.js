import {Component} from 'react'
import MeetingContext from '../../context/MeetingContext'
import Header from '../Header'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {nameInput: '', topicInput: topicsList[0].id, errorMsg: ''}

  onNameInputChange = event => {
    this.setState({nameInput: event.target.value})
  }

  onTopicInputChange = event => {
    this.setState({topicInput: event.target.value})
  }

  showError = () => {
    this.setState({errorMsg: 'Please enter your name'})
  }

  navigateToHomePage = () => {
    this.setState({errorMsg: ''})
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {nameInput, topicInput, errorMsg} = this.state
    return (
      <MeetingContext.Consumer>
        {value => {
          const {addName, changeMeetingType} = value

          const onSubmitForm = event => {
            event.preventDefault()
            if (nameInput === '') {
              this.showError()
            } else {
              addName(nameInput)
              changeMeetingType(topicInput)
              this.navigateToHomePage()
            }
          }

          return (
            <div className="register-bg-container">
              <Header />
              <div className="register-content-container">
                <div className="img-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                    className="register-img"
                  />
                </div>
                <form className="form" onSubmit={onSubmitForm}>
                  <h1 className="form-heading">Let us join</h1>
                  <label htmlFor="name" className="label-styles">
                    NAME
                  </label>
                  <input
                    id="name"
                    placeholder="Your name"
                    className="input-styles"
                    value={nameInput}
                    onChange={this.onNameInputChange}
                  />
                  <label htmlFor="topic" className="label-styles">
                    TOPICS
                  </label>
                  <select
                    id="topic"
                    className="input-styles select-styles"
                    value={topicInput}
                    onChange={this.onTopicInputChange}
                  >
                    {topicsList.map(eachObj => (
                      <option key={eachObj.id} value={eachObj.id}>
                        {eachObj.displayText}
                      </option>
                    ))}
                  </select>
                  <button type="submit" className="register-btn">
                    Register Now
                  </button>
                  <p className="error-msg">{errorMsg}</p>
                </form>
              </div>
            </div>
          )
        }}
      </MeetingContext.Consumer>
    )
  }
}

export default Register
