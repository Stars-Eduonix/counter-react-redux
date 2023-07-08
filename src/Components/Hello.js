import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { increment, decrement,reset } from "../redux/actions/actionCreators";


const Hello = () => {
       let a   = useSelector(state => state.a) 
       let dispatch = useDispatch()

    return(
        <div>
               <h1> {a} </h1>
               <button onClick={()=>dispatch(increment(100))}>Increment</button>
                <button
                onClick={()=>dispatch(decrement())}
                >Decrement</button>
                <button
                onClick={()=>dispatch(reset())}
                >Reset</button>
        </div>
    )
}

export default Hello