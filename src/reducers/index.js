import { combineReducers, applyMiddleware, createStore, compose} from 'redux';
import test from './test';

const reducers=combineReducers({
    test: test
})

const asyncMiddleware=store=>next=>action=>{
    if(typeof action=='function'){
        action(next)
    }
}

export default function configStore(){
    const middlewareEnhancer = applyMiddleware(asyncMiddleware)
    const composedEnhancers = compose(middlewareEnhancer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    const store = createStore(reducers, undefined, composedEnhancers)
    return store;
};