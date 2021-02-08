import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, useRouteMatch, useLocation, useParams } from 'react-router-dom';
import { fetchTest, setTest } from '../reducers/test';
import IntroTest from '../components/IntroTest';

const Test=(props)=>{
    const {fetchTest, test}=props;
    let location= useLocation().search;
    const params = new URLSearchParams(location).get('id');
    useEffect(()=>{
        fetchTest(params);
    },[fetchTest]);
    
    const handleStartTest=()=>{
        console.log('start');
    }
    return(
        <BrowserRouter>
            <Switch>
                <Route path={`/test/intro`}>
                    <IntroTest test={test} fetchTest={fetchTest} handleStartTest={handleStartTest} />
                </Route>
                <Route path={`/test/part-1-intro`}>
                    <IntroPart1 />
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
    setTest: (item)=>dispatch(setTest(item))
})
export default connect(mapStateToProps, mapActionsToProps)(Test);