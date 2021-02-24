import React from 'react';
import {Link} from 'react-router-dom';

const Part1=(props)=>{
    const {audio, questions}=props.part1;
    return(
        <div>
            <h6><b>Mark your answer on your answer sheet:</b></h6>
            <hr />
            <p>Please refrain from replaying the audio, you can only listen one time when in real exam.</p>
            <b>Audio:</b><br />
            <audio controls>
                <source type='audio/mp3' src={audio} />
            </audio>
            {questions.map(question=>{
                return(
                    <div key={question.id} id={`q1c${question.id}`}>
                        <img src={question.img} /><br />
                        <b>{question.id}. Select the answer</b><br />
                        <input type="radio" name={`q${question.id}`} value="1" />
                        <label>A</label><br />
                        <input type="radio" name={`q${question.id}`} value="2" />
                        <label>B</label><br />
                        <input type="radio" name={`q${question.id}`} value="3" />
                        <label>C</label><br />
                        <input type="radio" name={`q${question.id}`} value="4" />
                        <label>D</label><br />
                    </div>
                )
            })}
            <Link to={`/test/part-2-intro`}>Next</Link>
        </div>
    )
}
export default Part1;