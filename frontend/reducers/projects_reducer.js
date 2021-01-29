
import {RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT} from '../actions/project_actions'

const projectReducer = (state={}, action) =>{
    // debugger
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_PROJECTS:
            return action.projects;
        case RECEIVE_PROJECT:
            const newProject = {[action.project.id]: action.project}
            return Object.assign({}, state, newProject);
        default:
            return state;
    }
}

export default projectReducer;