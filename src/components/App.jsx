import "../styles/App.scss";
import { useState } from "react";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";
import Good from "./Good";
// 
function App() {
  const [grogu,setGrogu]= useState (0);
  const [coockie,setCoockie]= useState (["🍪","🍪","🍪"]);
  const [egg,setEgg]= useState (["🥚","🥚","🥚"]);
  const [frog,setFrog]= useState (["🐸","🐸","🐸"]);
  const [dice,setDice]= useState (null);
  const [status,setStatus]= useState ("En curso");

  const [cell, setCell] = useState();

  // // Función que oculte divs de las mercancias o mover los pies +1 casilla
  const getRandomNumber = (max) =>{
    return Math.ceil(Math.random() * max);
  }

  const rollDice = () =>{
    //segun nº que obtengamos tendremos un movimiento
    const randomNumber = getRandomNumber(4);
    console.log(randomNumber);
    if(randomNumber === 4){
      //Grogu se mueve una casilla
      setGrogu((position)=> position +1)
      setStatus("Grogu avanza una casilla")
    } else {
      if(randomNumber === 1 && coockie.length > 0){
        setCoockie(coockie.slice(1));
        setStatus("Has ayudado a Mando a guardar una cookie")
      } else if (randomNumber === 2 && egg.length > 0){
        setEgg(egg.slice(1));
        setStatus("Has ayudado a Mando a guardar un huevo")
      } else if (randomNumber === 3 && frog.length > 0){
        setFrog(frog.slice(1));
        setStatus("Has ayudado a Mando a guardar una rana")
    }}};
    
  //   if(randomNumber === 4){
  //     //Grogu se mueve una casilla
  //     setGrogu((position)=> position +1)
  //     setStatus("Grogu avanza una casilla")
  //   }else if (randomNumber === 3){
  //     //Ocultar coockie
  //     setCoockie.slice(1)
  //     setStatus("Has ayudado a Mando a guardar una cookie")
  //   }else if (randomNumber === 2){
  //     //Ocultamos egg
  //   }else{
  //     // Ocultamos frog
  //   }
  // };


  return (
    <>
    <Header />
    <main className="page">
      <p>Introduce tu nombre para jugar</p>
      <form action="">
        <input type="text" name= "name" />
      </form>
     
      <Board grogu={grogu}/>
      <Dice dice={dice} rollDice={rollDice}/>
 
      <section>
        <div className="game-status">{status}</div>
      </section>

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

export default App
