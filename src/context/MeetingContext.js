import React from 'react'

const MeetingContext = React.createContext({
  name: '',
  meetingType: '',
  addName: () => {},
  changeMeetingType: () => {},
})

export default MeetingContext
