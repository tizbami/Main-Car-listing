import React from 'react'
import TeamCard from './TeamCard'

const Team = ({user}) => {
  return (
    <div>
      <h1>The Team</h1>

      <div>
        <TeamCard passUser={user}/>
      </div>
    </div>
  );
}

export default Team