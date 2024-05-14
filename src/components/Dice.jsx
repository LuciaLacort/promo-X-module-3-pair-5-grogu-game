

const Dice = ({rollDice}) => {
    
    const handleClick = (ev) =>{
        ev.preventDefault();
        rollDice();
        

    }

  return (
    <div className="dice" onClick= {handleClick}>🎲</div>
  )
}

export default Dice
