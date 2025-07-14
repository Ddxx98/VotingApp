import React, { useState } from 'react'
import './VoterForm.css'

function VoterForm({ onVote, participants }) {
  const [studentName, setStudentName] = useState('')
  const [selectedParticipant, setSelectedParticipant] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (studentName.trim() && selectedParticipant) {
      onVote(studentName, selectedParticipant)
      setStudentName('')
      setSelectedParticipant('')
    }
  }

  return (
    <form className="voter-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        required
      />
      <select
        value={selectedParticipant}
        onChange={(e) => setSelectedParticipant(e.target.value)}
        required
      >
        <option value="">Select Participant</option>
        {participants.map(p => (
          <option key={p.id} value={p.id}>{p.name}</option>
        ))}
      </select>
      <button type="submit">Vote</button>
    </form>
  )
}

export default VoterForm