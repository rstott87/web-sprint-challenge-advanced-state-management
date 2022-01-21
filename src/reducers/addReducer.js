import { ADD_SMURF } from "../actions"

const initialState = 


const reducer = (state=initialState, action)=>{
    // eslint-disable-next-line default-case
    switch(action.type) {
        case ADD_SMURF:
            return {
            ...state,
            smurf: action.payload
            }
          }    
    }