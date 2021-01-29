import * as ProjectAPIUtil from '../util/project_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

export const receiveProjects = (projects)=>{
    return ({
        type: RECEIVE_ALL_PROJECTS,
        projects
    })
}

export const receiveProject = (project)=>{
    return ({
        type: RECEIVE_PROJECT,
        project
    })
}


export const fetchProjects = () => dispatch =>{
    return ProjectAPIUtil.fetchProjects().then(
        (projects) => dispatch(receiveProjects(projects))
        )
}

export const fetchProject = (projectId) => dispatch =>{
    return ProjectAPIUtil.fetchProject(projectId).then(
        (project) => dispatch(receiveProject(project))
        )
}

export const createProject = (project) => dispatch =>{
    return ProjectAPIUtil.createProject(project).then(
        (project) => dispatch(receiveProject(project))
        )
}