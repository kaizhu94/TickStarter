import {RECEIVE_ALL_ITEMS, RECEIVE_ITEM, DELETE_ITEM}  from '../actions/item_actions'

const itemsReducer = (state = {}, action )=>{
    // debugger
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_ALL_ITEMS:
            return action.items;
        case RECEIVE_ITEM:
            debugger
            const newItems = Object.assign({}, state, {[action.item.id]: action.item});
            return newItems;
        case DELETE_ITEM:
            // debugger
            const items = Object.assign({}, state);
            delete items[action.itemId];
            return items
        default:
            return state;
    }
}

export default itemsReducer;