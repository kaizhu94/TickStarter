import {RECEIVE_ALL_ITEMS}  from '../actions/item_actions'

const itemsReducer = (state = {}, action )=>{
    // debugger
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_ALL_ITEMS:
            return action.items
        default:
            return state;
    }
}

export default itemsReducer;