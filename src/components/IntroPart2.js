import React from 'react';
import { Link } from 'react-router-dom';

const IntroPart2=(props)=>{
    const {testId}=props;
    return(
        <div>
            <h1>Part II: Question - Response</h1>
            <p>
                <b>Directions:&nbsp;</b>
                <span> In this part of the test, you will hear a question or statement spoken in English, followed by three responses, also spoken in English. The question or statement and the responses will be spoken just one time. They will not be printed in your test book, so you must listen carefully. You are to choose the best response to each question or statement. Now listen to a sample question.</span>
            </p>
            <audio controls>
                <source type="audio/mp3" src="https://toeic4u.com/vi/Toeictest//files/audios/q_20201106-1013062.mp3" />
            </audio>
            <h2>You will hear:</h2><br />
            <b>Why are you late?</b><br />
            <input type="radio" value="1" />
            <label>A. I hope I won't be</label><br />
            <input type="radio" value="2" />
            <label>B. My car broke down</label><br />
            <input type="radio" value="3" />
            <label>C.  He alway is</label><br />
            <p>The best response is choice B. "My car broke down". Therefore, you should choose B.</p>
            <Link to={`/test/part-2?id=${testId}`}>
            START
            </Link>
        </div>
    )
}
export default IntroPart2;