import Board from "./Board";
import Dice from "./Dice";
import Good from "./Good";
import Form from "./Form";
import GameStatus from "./GameStatus";

const Page = ({setName,grogu,dice,rollDice,status,coockie,egg,frog}) => {
  return (
    <>
    <main className="page">
      <p>Introduce tu nombre para jugar</p>

      <Form setName={setName}/>
      <Board grogu={grogu}/>
      <Dice dice={dice} rollDice={rollDice}/>
      <GameStatus status={status}  />
 
  
      <Good goods={coockie}/>
      <Good goods={egg}/>
      <Good goods={frog}/>
      
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </main>
    </>
  )
}

export default Page