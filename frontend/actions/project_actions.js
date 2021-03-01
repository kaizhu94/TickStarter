import * as ProjectAPIUtil from '../util/project_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';

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

export const removeProject = (projectId)=>{
    return ({
        type: DELETE_PROJECT,
        projectId
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

export const deleteProject = (projectId) => dispatch =>{
    debugger
    return ProjectAPIUtil.deleteProject(projectId).then(
        () => dispatch(removeProject(projectId))
        )
}

export const updateProject = (project) => dispatch =>{
    debugger
    return ProjectAPIUtil.updateProject(project).then(
        (project) => dispatch(receiveProject(project))
        )
}

export const updateProjectImage = (id, formdata) => dispatch =>{
    debugger
    return ProjectAPIUtil.updateProjectImage(id, formdata).then(
        (project) => dispatch(receiveProject(project))
        )
}

