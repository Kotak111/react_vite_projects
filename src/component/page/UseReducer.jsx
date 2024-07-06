import React, { useReducer } from 'react';



function reducer(state, action){
    if(action.type === "inc"){
        return{
            count:state.count+1
        };
    }
    else if(action.type === "dec"){
        return{
            count:state.count-1
        }
    }
    throw Error("unknow action")
}
function UseReducer(props) {
const intialValue={count:0}
const [state,dispatch]=useReducer(reducer,intialValue);
    return (
       <>
       <button onClick={()=>dispatch({type:"inc"})}>
        +
       </button>
       <button onClick={()=>dispatch({type:"dec"})}>
        -
       </button>
      <p>counter : {state.count}</p>
       </>
    );
}

export default UseReducer;