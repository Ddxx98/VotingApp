import React from 'react'
import Participant from './Participant'
import './ParticipantList.css'

function ParticipantList({ participants }) {
  return (
    <div className="participant-list">
      {participants.map(participant => (
        <Participant key={participant.id} participant={participant} />
      ))}
    </div>
  )
}

export default ParticipantList