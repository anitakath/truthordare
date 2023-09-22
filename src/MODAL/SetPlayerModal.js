import React, {Fragment, useRef, useState} from 'react'
import styles from './Modal.module.css'

import ReactDOM from 'react-dom'



const SetPlayerModal = props =>{


    //SET STATE

    const playerOneRef = useRef();
    const playerTwoRef = useRef();
    const playerThreeRef = useRef();
    const playerFourRef = useRef();
    const playerFiveRef = useRef();

    const [players, setPlayers] = useState([])
   






    // POST DATA

    async function addPlayersHandler (e) {
        e.preventDefault();

        const enteredPlayerOne = playerOneRef.current.value;
        const enteredPlayerTwo = playerTwoRef.current.value;
        const enteredPlayerThree = playerThreeRef.current.value;
        const enteredPlayerFour = playerFourRef.current.value;
        const enteredPlayerFive = playerFiveRef.current.value;
        
        const playerOne = {
            name: enteredPlayerOne
        }

        const playerTwo ={
            name: enteredPlayerTwo
        }

        const playerThree ={
            name: enteredPlayerThree
        }

        const playerFour={
            name: enteredPlayerFour
        }
        const playerFive ={
            name: enteredPlayerFive
        }
        
        const playerArray =[ 
            {
                player: enteredPlayerOne,
            },
            {
                player: enteredPlayerTwo,
            },
            {
                player: enteredPlayerThree,
            },
            {
                player: enteredPlayerFour,
            }, 
            {
                player: enteredPlayerFive
            }
        ]

        const thePlayer = playerArray.map((x) =>{
            return(
                x.player
            )
        })

        console.log(thePlayer)
        /*
        const players ={
            playerOne: enteredPlayerOne,
            playerTwo: enteredPlayerTwo,
            playerThree: enteredPlayerThree,
            playerFour: enteredPlayerFour,
            playerFive: enteredPlayerFive
        }
        */

        const response = await fetch('https://truth-or-dare-e8a59-default-rtdb.firebaseio.com/players.json', {
            method: 'POST',
            body: JSON.stringify(thePlayer),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();
        console.log(data)

     

        if(playerOne && playerTwo && playerThree && playerFour && playerFive){
            console.log(props.onStartGame)
            props.onStartGame();
        }

        

    }
   
   
    const Backdrop = props =>{

        return     (
            <div className={styles.backdrop}/>
        ) 
    }

    const ModalOverlay = props =>{
        return (
            <div className={styles.setPlayerContainer}>
            <form onSubmit={addPlayersHandler}>

                <label> Player 1</label>
                <input 
                type="text" 
                ref={playerOneRef}
                required
                ></input>
                
                <label> Player 2</label>
                <input 
                type="text"
                ref={playerTwoRef}
                required
                ></input>

                <label> Player 3</label>
                <input 
                type="text"
                ref={playerThreeRef}
                required
                ></input>

                <label> Player 4</label>
                <input 
                type="text"
                ref={playerFourRef}
                required
                ></input>

                <label> Player 5</label>
                <input 
                type="text"
                ref={playerFiveRef}
                required
                ></input>
                
        
                <button className={styles.startButton} > start game </button>

             

            </form>

            <div className={styles.setButtons}>

            <button onClick={props.onStartGame}> add more players </button>
           
            

            </div>
           
        </div>

    )}


    return(
        <Fragment>
          {ReactDOM.createPortal(<Backdrop onStartGame={props.onStartGame} />, document.getElementById('backdropRoot'))}
          {ReactDOM.createPortal(<ModalOverlay onStartGame={props.onStartGame} />, document.getElementById('modalOverlayRoot'))}

        </Fragment>
       
    )
}

export default SetPlayerModal;