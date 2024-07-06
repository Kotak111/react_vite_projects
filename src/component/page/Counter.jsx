import React from 'react';
import { inc , dec,incBy10} from '../ReduxToolkit/CounterSlice';
import { useDispatch, useSelector } from 'react-redux';

function Counter(props) {
    const dispatch= useDispatch();
    const {no1,no2}=useSelector((state)=>state.counter)

    return (
        <>
        <button className='btn btn-primary' onClick={()=>dispatch(inc())}>+</button>
        <button className='btn btn-warning' onClick={()=>dispatch(dec())}>-</button>
        <span>{no1}</span>


        <button className='btn btn-danger' onClick={()=>dispatch(incBy10(10))}>incBy10</button>
        <span>{no2}</span>
        </>
    );
}

export default Counter;