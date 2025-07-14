import React from 'react'
import './Participant.css'

function Participant({ participant }) {
  return (
    <div className="participant-card">
      <h3>{participant.name} <span className="vote-count">({participant.votes} votes)</span></h3>
      {participant.voters.length > 0 && (
        <ul className="voter-list">
          {participant.voters.map((voter, idx) => (
            <li key={idx}>{voter}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Participant