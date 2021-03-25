import {RECEIVE_FROM, REMOVE_FROM}  from '../actions/from_action'

const fromReducer = (state = {}, action )=>{
    
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_FROM:
            return action.from;
        case REMOVE_FROM:
            return {};
        
        default:
            return state;
    }
}

export default fromReducer;