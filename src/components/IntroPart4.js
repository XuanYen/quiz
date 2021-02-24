import React from 'react';
import { Link } from 'react-router-dom';

const IntroPart4=(props)=>{
    const {testId}=props;
    return(
        <div>
            <h1>Part IV: Short Talks</h1>
            <p>
                <b>Directions:&nbsp;</b>
                <span> You will hear some talks given by a single speaker. You will be asked to answer three questions about what the speaker says in each talk. Select the best response to each question and mark the letter (A), (B), (C) or (D) on your answer sheet. The talks will not be printed in your test book and will be spoken only one time.</span>
            </p>
            <audio controls>
                <source type="audio/mp3" src="https://toeic4u.com/vi/Toeictest/files/audios/part_4_instruction.mp3" />
            </audio>
            <Link to={`/test/part-4?id=${testId}`}>
            START
            </Link>
        </div>
    )
}
export default IntroPart4;