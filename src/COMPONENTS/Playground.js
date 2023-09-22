import React, {useState} from 'react'
import styles from './Playground.module.css'
import TruthModal from '../MODAL/TruthModal'
import DareModal from '../MODAL/DareModal'

const Playground = props =>{

    const [showTruth, setShowTruth] = useState(false)
    const [showDare, setShowDare] = useState(false)
    const [choice, setChoice] = useState('')

    const randomIdx= Math.floor(Math.random () * 5)
    console.log(randomIdx)
   
    console.log(props.players[0])


    const truthHandler = () =>{
        setShowTruth(true)
        setChoice('truth')

        console.log('truth')

    }

    const dareHandler = () =>{
        setShowDare(true)
        setChoice('dare')

        console.log('dare')

    }

    console.log(choice)

    const closeModal = () =>{
        setChoice('')
    }



    return(
        <div className="playgroundContainer">

            <div className={styles.playground} id="truth"> 
                <button className={styles.gameBtns} onClick={truthHandler} > TRUTH </button> 
            </div>
            <div className={styles.currentUserContainer}>
                <div className={styles.currentUser}>
                current player
                </div> 
            </div>
            <div className={styles.playground} id="dare"> 
                <button className={styles.gameBtns} onClick={dareHandler}> DARE </button> 
            </div>

            {choice === 'truth' && <TruthModal onCloseModal={closeModal} />}
            {choice === 'dare' && <DareModal  onCloseModal={closeModal} />}
       
        </div>

    )
}

export default Playground;