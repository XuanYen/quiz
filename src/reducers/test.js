import axios from 'axios';

const SET_TEST='SET_TEST';
const SET_ALL_TEST='SET_ALL_TEST';
const SET_INTRO='SET_INTRO';

const initialState={
    loading: false,
    items: [],
    item: {},
    intro: {}
}

export const setTest=(item)=>({
    type: SET_TEST,
    payload: item
})

export const setAllTest=(items)=>({
    type: SET_ALL_TEST,
    payload: items
})

export const setIntro=(intro)=>({
    type: SET_INTRO,
    payload: intro
})

export const fetchTest=(id)=>async(dispatch)=>{
    const res= await axios.get(`https://my-json-server.typicode.com/XuanYen/quiz/test?id=${id}`);
    if(res.status===200){
        dispatch(setTest(res.data[0]));
    }
}

export const fetchAllTest=()=>async dispatch=>{
    const res=await axios.get('https://my-json-server.typicode.com/XuanYen/quiz/test');
    if(res.status===200){
        dispatch(setAllTest(res.data));
    }
}

export const fetchIntro=()=>async dispatch=>{
    const res=await axios.get('https://my-json-server.typicode.com/XuanYen/quiz/introToeic');
    if(res.status===200){
        dispatch(setIntro(res.data));
    }
}
const reducer=(state=initialState, action)=>{
    switch(action.type){
        case SET_TEST:
            return{
                ...state,
                item: action.payload,
            }
        case SET_ALL_TEST:
            return{
                ...state,
                items: action.payload
            }
        case SET_INTRO: 
            return{
                ...state,
                intro: action.payload
            }
        default: 
            return state;
    }
}
export default reducer;