import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import MeetingContext from './context/MeetingContext'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.
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

class App extends Component {
  state = {name: '', meetingType: topicsList[0].displayText}

  addName = username => {
    this.setState({name: username})
  }

  changeMeetingType = id => {
    const filteredData = topicsList.filter(eachObj => eachObj.id === id)
    const {displayText} = filteredData[0]
    this.setState({meetingType: displayText})
  }

  render() {
    const {name, meetingType} = this.state
    return (
      <MeetingContext.Provider
        value={{
          name,
          meetingType,
          addName: this.addName,
          changeMeetingType: this.changeMeetingType,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </MeetingContext.Provider>
    )
  }
}

export default App
