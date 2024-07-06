import React, { useRef } from 'react';

function UseRef(props) {
    const value1=useRef("");
    const value2=useRef("");
    function insertdata(){
        const data = {
            value1:value1.current.value,
            value2:value2.current.value
        }
        console.log(data);
    }
    return (
        <>
        <input type="text" ref={value1} placeholder='enter 1' />
        <br />
        <input type="text" ref={value2} placeholder='enter 2' />
        <br />
        <button onClick={insertdata}>click</button>
        </>
    );
}

export default UseRef;