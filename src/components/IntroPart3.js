import React from 'react';
import { Link } from 'react-router-dom';

const IntroPart3=(props)=>{
    const {testId}=props;
    return(
        <div>
            <h1>Part III: Short Conversations</h1>
            <p>
                <b>Directions:&nbsp;</b>
                <span>You will hear some conversations between two people. You will be asked to answer three questions about what the speakers say in each conversation. Select the best response to each question and mark the letter (A), (B), (C) or (D) on your answer sheet. The conversations will not be printed in your test book and will be spoken only one time.</span>
            </p>
            <audio controls>
                <source type="audio/mp3" src="https://toeic4u.com/vi/Toeictest/files/audios/part_3_instruction.mp3" />
            </audio>
            <Link to={`/test/part-3?id=${testId}`}>
            START
            </Link>
        </div>
    )
}
export default IntroPart3;