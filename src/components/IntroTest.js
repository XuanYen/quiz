import React from 'react';

const IntroTest=(props)=>{
    const { test, handleStartTest }=props;
    const {title, describe, total, timeLis, timeRead}=test;
    return(
        <div>
            <h1>{title}-{describe}</h1>
            <h6>Total time: {total} minutes</h6>
            <p>Listening: {timeLis} minutes</p>
            <p>Reading: {timeRead} minutes</p>
            <button onClick={()=>handleStartTest()}>START</button>
        </div>
    )
}
export default IntroTest;