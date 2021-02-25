
import {RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT, DELETE_PROJECT} from '../actions/project_actions'

const projectReducer = (state={}, action) =>{
    //    
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_PROJECTS:
            return action.projects;
        case RECEIVE_PROJECT:
            const newProject = {[action.project.id]: action.project}
            return newProject
        case DELETE_PROJECT:
            const newProjects = Object.assign({}, state);
            delete newProjects[parseInt(action.projectId)];
            debugger
            return newProjects;
        default:
            return state;
    }
}

export default projectReducer;