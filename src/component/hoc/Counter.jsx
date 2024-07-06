import React, { useState } from 'react';

function Counter(props) {
    var [count,setCount]=useState(0);
   
    const inc= ()=>{
        setCount(++count)
    }
    return (
        <div className='mx-auto'>
            <h1>{count}</h1>
            <button onClick={inc} className='btn btn-primary'>+</button>
        </div>
    );
}

export default Counter;