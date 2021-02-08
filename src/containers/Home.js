import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllTest } from '../reducers/test';
import {connect} from 'react-redux';

const Home=(props)=>{
    const {fetchAllTest, test}=props;
    useEffect(()=>fetchAllTest(),[fetchAllTest])
    return(
        <div>
            <h1>Full Test - Thi thử đề thật <br />
                <svg width="13px" height="13px" viewBox="0 0 16 16" className="bi bi-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8"></circle>
                </svg>
                <span>Thời lượng: 120 phút</span>
            </h1>
            {test.map(item=>{
                return(
                    <div key={item.id}>
                        <Link to={`/test/intro?id=${item.id}`}>{item.title} - Đề số {item.id}</Link>
                    </div>
                )
            })}
        </div>
    )
}
const mapStateToProps=state=>{
    return{
        test: state.test.items
    }
}
const mapActionsToProps=dispatch=>({
    fetchAllTest: ()=>dispatch(fetchAllTest()),
})
export default connect(mapStateToProps, mapActionsToProps)(Home);