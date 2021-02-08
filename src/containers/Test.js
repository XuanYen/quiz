import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import { fetchIntro, fetchTest, setTest } from '../reducers/test';
import IntroTest from '../components/IntroTest';
import IntroPart1 from '../components/IntroPart1';

const Test=(props)=>{
    const {fetchTest, fetchIntro, intro, test}=props;
    let location= useLocation().search;
    const params = new URLSearchParams(location).get('id');
    useEffect(()=>{
        fetchTest(params);
        fetchIntro();
    },[fetchTest, fetchIntro]);
    
    return(
        <BrowserRouter>
            <Switch>
                <Route path={`/test/intro`}>
                    <IntroTest test={test} fetchTest={fetchTest} />
                </Route>
                <Route path={`/test/part-1-intro`}>
                    <IntroPart1 intro={intro} fetchIntro={fetchIntro} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
const mapStateToProps=state=>{
    return{
        test: state.test.item,
        intro: state.test.intro
    }
}
const mapActionsToProps=dispatch=>({
    fetchTest: (id)=>dispatch(fetchTest(id)),
    setTest: (item)=>dispatch(setTest(item)),
    fetchIntro: ()=>dispatch(fetchIntro())
})
export default connect(mapStateToProps, mapActionsToProps)(Test);