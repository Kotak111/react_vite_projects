// useCallback is a function 
// function as props supply to use useCallback


import React, { useCallback, useState } from 'react';

function UseCallback() {
    const [count,setCount]=useState(0)
    const counter1 =  useCallback(()=>{
        setCount(count+1)
    },[count])
    return (
       <>
       <div className="col-6 mx-auto shadow p-5 my-5">
        {count}
       <ShowOut counter={counter1}></ShowOut>

       </div>
       </>
    );
}

const ShowOut = ({counter})=>{
    return(
        <>
        <button className='btn btn-primary ms-5' onClick={counter}>click</button>
        </>
    )
}

export default UseCallback;


//useMemo is memorized a value
// usecallBack is memorized a function
