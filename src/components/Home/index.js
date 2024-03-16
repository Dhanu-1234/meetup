import {Link} from 'react-router-dom'
import MeetingContext from '../../context/MeetingContext'
import Header from '../Header'
import './index.css'

const Home = () => (
  <MeetingContext.Consumer>
    {value => {
      const {name, meetingType} = value

      return (
        <div>
          <Header />
          {name === '' ? (
            <div className="content-container">
              <h1 className="welcome-heading">Welcome to Meetup</h1>
              <p className="welcome-description">
                Please register for the topic
              </p>
              <Link to="/register">
                <button type="button" className="register-btn">
                  Register
                </button>
              </Link>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </div>
          ) : (
            <div className="content-container">
              <h1 className="greetings-heading">Hello {name}</h1>
              <p className="greetings-description">Welcome to {meetingType}</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </div>
          )}
        </div>
      )
    }}
  </MeetingContext.Consumer>
)

export default Home
