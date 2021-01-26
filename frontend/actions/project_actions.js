import * as PorjectAPIUtil from '../util/project_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

export const receivePorjects = (projects)=>{
    return ({
        type: RECEIVE_ALL_PROJECTS,
        projects
    })
}

export const receivePorject = (project)=>{
    return ({
        type: RECEIVE_ALL_PROJECTS,
        project
    })
}

export const fetchProjects = () => dispatch =>{
    return PorjectAPIUtil.fetchPorjects().then(
        (projects) => dispatch(receivePorjects(projects))
        )
}

export const fetchProject = (projectId) => dispatch =>{
    return PorjectAPIUtil.fetchPorject(projectId).then(
        (project) => dispatch(receivePorjects(project))
        )
}