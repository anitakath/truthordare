import styles from './TruthDare.module.css'
import React from 'react'
import ReactDOM from 'react-dom'

import TruthField from '../COMPONENTS/TruthField'

const TruthModal = props=>{

    const completedHandler = () =>{
        props.onCloseModal();
    }

    const ModalContainer = () =>{

        return(
            <div className={styles.modalContainer}>
                <h1> TRUTH </h1>
               
                <TruthField/>

                <button onClick={completedHandler} className={styles.modalButton}> COMPLETED </button>
            </div>
        )
    }


    return(
        <div>
            {ReactDOM.createPortal(<ModalContainer  onCloseModal={props.onCloseModal}/>, document.getElementById('choiceRoot'))}

        </div>
    
        
    )
}

export default TruthModal;