import {Fragment, useState, useCallback} from 'react'
import './App.css';

import Playground from './COMPONENTS/Playground';

import SetPlayerModal from './MODAL/SetPlayerModal';


function App() {

  // SET STATE
  const [players, setPlayers] = useState([])
  const [displayPlayers, setDisplayPlayers] = useState(false)


  // GET DATA

  const fetchPlayershandler = useCallback(async()=>{

    setDisplayPlayers(true)

    const response = await fetch('https://truth-or-dare-e8a59-default-rtdb.firebaseio.com/players.json')

    if(!response.ok){
      console.log('something went wrong')
    }

    const data = await response.json();

    console.log(data)

    const playersArray = []

    for(const key in data){
      playersArray.push({
        player: data[key]
      })
    }

    setPlayers(playersArray)
    
  })

  console.log(players)

 








  // player modal at first
  const [ startGame, setStartGame ] = useState(false)

  const startTheGame = () =>{
    console.log('moincito')
    setStartGame(true)
  }




  return (
   <Fragment>


     <div className="appContainer">
      <h1 className="gameTitle"> TRUTH OR DARE </h1>
      
      {!displayPlayers && <button onClick={fetchPlayershandler} className="getPlayersBtn"> get players </button>}


      <p>{players.map((player)=>{
          return(
            <div className="playerContainer">
              <h1 className="players"> {player.player[0]}</h1>
              <h1 className="players">{player.player[1]} </h1>
              <h1 className="players">{player.player[2]} </h1>
              <h1 className="players">{player.player[3]} </h1>
              <h1 className="players">{player.player[4]} </h1>

            </div>
          
          )})}
      </p>

      {displayPlayers &&  <Playground
       players={players}
      />}

      {!startGame && <SetPlayerModal 
      onStartGame={startTheGame} 
      />}



     </div>
   </Fragment>
  );
}

export default App;
