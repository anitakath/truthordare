import React from 'react'
import styles from './truthDarePlayground.module.css'


const DareField = () =>{

    const dareArray = [
        'Show the last five people you texted and what the messages said',
        'Say something dirty to the person on your left',
        'Keep your eyes closed until it is your go again',
        'Show off your orgasm face',
        'comment on everything the person to your right says with "you are cute" - until it is your turn again', 
        '2 shots for you',
        'Eat a snack without using your hands',
        'Say two honest things about everyone else in the group',
        'Eat a raw piece of garlic',
        'Do 50 squats',
        'Show us your screen time report',
        'Down your drink (responsibly)',
        'Tell the group two truths and a lie, and they have to guess which one the lie is',
        'repeat everything the person to your left says - until it i your turn again',
        'Sit on the floor for the next 15 minutes',
        'Match each person with a series they could be in and explain why',
        'take a shot',
        'do 10 push ups', 
        'Smell someones armpit.',
        'Pet somebody as if they are a dog.',
        'Test whose hair smells the best.',
        'Have the first same-sex person to your right lick something off your neck.'

        
    ]

    console.log(dareArray.length)
    const randomTask = dareArray[Math.floor(Math.random()*(dareArray.length +1))]
    console.log(randomTask)



    return(
        <div className={styles.fieldContainer}>
            <h1> {randomTask} </h1>
        </div>
    )
}

export default DareField;