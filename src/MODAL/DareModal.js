import styles from './TruthDare.module.css'
import React from 'react'
import ReactDOM from 'react-dom'

import DareField from '../COMPONENTS/DareField'

const DareModal = props =>{

    const completedHandler = () =>{
        props.onCloseModal();
    }


    const DareModal = () =>{
        return(
            <div className={styles.modalContainer}>
                <h1> DARE </h1>
                <DareField/>
                <button onClick={completedHandler} className={styles.modalButton} > COMPLETED </button>
              
             </div>

        )
    }

    return(
        <div>
            {ReactDOM.createPortal(<DareModal onCloseModal={props.onCloseModal}/>, document.getElementById('choiceRoot'))}
        </div>

    )
}

export default DareModal;