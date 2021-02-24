import React from 'react';
import { Link } from 'react-router-dom';

const IntroTest=(props)=>{
    const { test }=props;
    const { title, describe, total, timeLis, timeRead}=test;
    return(
        <div>
            <h1>{title}-{describe}</h1>
            <h6>Total time: {total} minutes</h6>
            <p>Listening: {timeLis} minutes</p>
            <p>Reading: {timeRead} minutes</p>
            <Link to={'/test/part-1-intro'}>
                START
            </Link>
        </div>
    )
}
export default IntroTest;