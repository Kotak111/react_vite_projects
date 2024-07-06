import { useState } from "react";
import '../layout/index.css'
const UseState = () =>{

    var [count,setCount]= useState(0);
    //const [value1,value2]=useState(0)
    // value1 - > current value
    // value2 -> update data through function

    const inc =()=>{
        setCount(++count)
        //i++ //post increment 
        // ++i // pre increment 
    }

    const dec = () =>{
        
        // if(count > 0)
        // {
        //     setCount(--count)
        // }
        // else{
        //     return count;
        // }
        count>0?setCount(--count): count  
    }

    return (
        <>
        <div  className="counter">
        <h1 className="">Counter : {count} </h1>
        
        <button className="btn btn-success ms-4 " onClick={inc}>+</button>
        <button className="btn btn-danger ms-3" onClick={dec}>-</button>
        </div> </>
    )

}
export default UseState;
