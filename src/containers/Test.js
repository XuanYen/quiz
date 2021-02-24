import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import { fetchTest, setTest } from '../reducers/test';
import IntroTest from '../components/IntroTest';
import IntroPart1 from '../components/IntroPart1';
import IntroPart2 from '../components/IntroPart2';
import Part1 from '../components/Part1';


const Test=(props)=>{
    const {fetchTest, test}=props;
    const part1=test.part1;
    let location= useLocation().search;
    const param = new URLSearchParams(location).get('id');
    useEffect(()=>{
        fetchTest(param);
    },[fetchTest]);
    
    return(
        <BrowserRouter>
            <Switch>
                <Route path={`/test/intro`}>
                    <IntroTest test={test} />
                </Route>
                <Route path='/test/part-1-intro'>
                    <IntroPart1 testId={test.id} />
                </Route>
                <Route path='/test/part-2-intro'>
                    <IntroPart2 testId={test.id} />
                </Route>
                <Route path={`/test/part-1`}>
                    <Part1 part1={part1} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
const mapStateToProps=state=>{
    return{
        test: state.test.item
    }
}
const mapActionsToProps=dispatch=>({
    fetchTest: (id)=>dispatch(fetchTest(id)),
    setTest: (item)=>dispatch(setTest(item)),
})
export default connect(mapStateToProps, mapActionsToProps)(Test);