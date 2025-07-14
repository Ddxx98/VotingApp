import React, { useState } from 'react'
import VoterForm from './components/VoterForm'
import ParticipantList from './components/ParticipantList'
import './App.css'

const initialParticipants = [
  { id: 1, name: 'Ram', votes: 0, voters: [] },
  { id: 2, name: 'Lav', votes: 0, voters: [] },
  { id: 3, name: 'Kush', votes: 0, voters: [] }
]

function App() {
  const [participants, setParticipants] = useState(initialParticipants)
  const [totalVoters, setTotalVoters] = useState(0)

  const handleVote = (studentName, selectedId) => {
    setParticipants(prev =>
      prev.map(participant =>
        participant.id === parseInt(selectedId)
          ? {
              ...participant,
              votes: participant.votes + 1,
              voters: [...participant.voters, studentName]
            }
          : participant
      )
    )
    setTotalVoters(prev => prev + 1)
  }

  return (
    <div className="app-container">
      <h1>Voting App</h1>
      <h2>Total Voters: {totalVoters}</h2>
      <VoterForm onVote={handleVote} participants={participants} />
      <ParticipantList participants={participants} />
    </div>
  )
}

export default App