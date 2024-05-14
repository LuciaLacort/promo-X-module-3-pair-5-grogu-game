import Grogu from "./Grogu"
import Cell from "./Cell"

const Board = ({grogu}) => {

  const cells = Array(7).fill(null)

  return (
    <section className="board">

    {cells.map((_,index) => (<Cell key={index} isGroguHere={index===grogu}/>))}


    {/* <div className="cell"></div>
    <div className="cell"></div>
    <div className="cell"></div>
    <div className="cell"></div>
    <div className="cell"></div>
    <div className="cell"></div> */}
  </section>
  )
}

export default Board