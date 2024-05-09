import "../styles/App.scss";
// 
function App() {
  const [grogu,setGrogu]= useState ("");
  const [coockie,setCoockie]= useState ("");
  const [egg,setEgg]= useState ("");
  const [frog,setFrog]= useState ("");
  const [dice,setDice]= useState ("");
  const [result,setresult]= useState ("");
  // Función que oculte divs de las mercancias o mover los pies +1 casilla
  const getRandomNumber = (max) =>{
    return Math.ceil(Math.random() * max);
  }

  const getDiceMove = () =>{
    //segun nº que obtengamos tendremos un movimiento
  }

  const handleClick = () =>{

  }

  return (
    <>
    <header>
      <h1>¡Cuidado con Grogu!</h1>
    </header>
    <main className="page">
      <p>Introduce tu nombre para jugar</p>
      <form action="">
        <input type="text" name= "name" />
      </form>
      <section className="board">
        <div className="cell"><div className="grogu">👣</div></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
      </section>

      <section>
        <button className="dice" onClick={handleClick} >Lanzar Dado</button>
        <div className="game-status">En curso</div>
      </section>

      <section className="goods-container">
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
      </section>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </main>

    </>
  )
}
export default App
