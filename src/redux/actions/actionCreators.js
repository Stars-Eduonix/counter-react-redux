import { INCREMENT,DECREMENT,RESET } from "./actionTypes.js"; 


// action creators - functions that return actions

export const increment= (value=1) =>{
     return {
            type:INCREMENT,
            value:value
      }
}

export const decrement= () =>{
     return {
            type:DECREMENT
      }
}

export const reset= () =>{
        return {
                type:RESET
        }
}