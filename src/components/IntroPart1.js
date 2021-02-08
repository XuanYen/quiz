import React from 'react';
import { Link } from 'react-router-dom';

const IntroPart1=()=>{
    return(
        <div>
            <h1>Part I: Picture Description</h1>
            <p>
                <b>Directions:&nbsp;</b>
                <span>For each question, you will see a picture and you will hear four short statements. The statements will be spoken just one time. They will not be printed in your test book so you must listen carefully to understand what the speaker says. When you hear the four statements, look at the picture and choose the statement that best describes what you see in the picture. Choose the best answer A, B, C or D</span>
            </p>
            <img src='https://toeic4u.com/vi/Toeictest/files/images/q_20200604-0148361.png' alt='Intro part 1' />
            <br/>
            <audio controls>
                <source type="audio/mp3" src="https://toeic4u.com/vi/Toeictest/files/audios/q_20200604-0148361.mp3" />
            </audio>
            <h2>EXAMPLE</h2><br />
            <p>Now listen to the four statements.</p>
            <p>Statement (D) best describes what you see in the picture.</p>
            <p>Therefore, you should choose answer (D).</p>
            <ol type='A'>
                <li>He is on the phone</li>
                <li>She is driving the car</li>
                <li>She is typing on the computer</li>
                <li>He is sitting next to her</li>
            </ol>
            <Link to='/test/part-1'>
            START
            </Link>
        </div>
    )
}
export default IntroPart1;