
import { INCREMENT,DECREMENT,RESET } from "../actions/actionTypes.js"; 

const initialState =  {a:0}

const counterReducer = (state=initialState, action) =>{

    switch(action.type){
         case INCREMENT:
                return {...state, a: state.a + action.value}
         case DECREMENT:
                return {...state, a: state.a - 1}
        case RESET:
                return {...state, a: 0}
       default:
              return state
    }

}

export default counterReducer




