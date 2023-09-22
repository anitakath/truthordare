import React from 'react'
import styles from './truthDarePlayground.module.css'


const TruthField = () =>{

    const truthArray = [
        'Who was your first celebrity crush?', 
        'What was the most criminal thing you ever did?',
        'What is the most embarrassing thing you have ever done?', 
        'What is your worst habit?',
        'What is the worst thing you have ever said to anyone?',
        'Tell us about your worst date you have been on',
        'which three stars would you like to have dinner with?',
        'Tell us about your first kiss',
        'Have you ever peed in the pool?',
        'Who do you think is the best-dressed person in this room?',
        'What is the weirdest thing you have ever eaten?',
        'what was the most romantic thing someone did for you?',
        'what was the most romantic thing you did for someone',
        'imagine you run out of toilet paper, how would you now clean yourself?',
        'have you ever faked an orgasm to end sex faster?',
        'what movie made you cry?',
        'what would you do if you were a woman/man for one day',
        'Have you ever sent naked pictures of yourself?',
        'What do you find sexiest about yourself?',
        'where do you see yourself in ten years?',
        'Would you rather have babies or dogs/cats in the future?'
    ]

    console.log(truthArray.length)

    const randomTask = truthArray[Math.floor(Math.random()*(truthArray.length +1))]
    console.log(randomTask)

    return(
        <div className={styles.fieldContainer}>
            <h1> {randomTask} </h1>
            
        </div>
    )
}

export default TruthField;