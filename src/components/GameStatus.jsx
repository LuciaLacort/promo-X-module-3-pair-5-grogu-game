import React from 'react'

const GameStatus = ({status,name}) => {
  return (
    <section>
    <div className="game-status">{name}{status}</div>
  </section>
  )
}

export default GameStatus

