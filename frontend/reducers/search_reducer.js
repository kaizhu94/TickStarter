
import {SEARCH_PROJECTS} from '../actions/search_actions'

const searchReducer = (state={}, action) =>{
    // debugger
    Object.freeze(state);
    switch(action.type){
        case SEARCH_PROJECTS:
            return action.projects;
        default:
            return state;
    }
}

export default searchReducer;