const FETCH_TEST='FETCH_TEST';

const initialState={
    loading: false,
    tests: []
}

export const fetchTest=()=>({type: FETCH_TEST})

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case FETCH_TEST:
            return{
                ...state
            }
        default: 
            return state;
    }
}
export default reducer;