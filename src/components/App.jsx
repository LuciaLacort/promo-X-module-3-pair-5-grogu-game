import "../styles/App.scss";
import { useState } from "react";
import Header from "./Header";
import Board from "./Board";
// 
function App() {
  // const [grogu,setGrogu]= useState ("");
  // const [coockie,setCoockie]= useState ("");
  // const [egg,setEgg]= useState ("");
  // const [frog,setFrog]= useState ("");
  // const [dice,setDice]= useState ("");
  // const [status,setStatus]= useState ("");

  const [cell, setCell] = useState();

  // // Función que oculte divs de las mercancias o mover los pies +1 casilla
  const getRandomNumber = (max) =>{
    return Math.ceil(Math.random() * max);
  }

  const getDiceMove = () =>{
    //segun nº que obtengamos tendremos un movimiento
    const randomNumber = getRandomNumber(4);
    console.log(randomNumber);
    if(randomNumber === 4){
      //Grogu se mueve una casilla
    }else if (randomNumber === 3){
      //Ocultar coockie
    }else if (randomNumber === 2){
      //Ocultamos egg
    }else (randomNumber === 1){
      // Ocultamos frog
    }
  };

  const handleClick = () =>{
    getDiceMove()
  }

  return (
    <>
    <Header />
    <main className="page">
      <p>Introduce tu nombre para jugar</p>
      <form action="">
        <input type="text" name= "name" />
      </form>
      <Board />
 
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
