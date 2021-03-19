import * as SearchAPIUtil from '../util/search_util';

export const SEARCH_PROJECTS = 'SEARCH_PROJECTS';

export const receiveSearch = (projects)=>{
    return ({
        type: SEARCH_PROJECTS,
        projects
    })
}

export const searchProjects = (searchTerm) => dispatch =>{
    debugger
    return SearchAPIUtil.search(searchTerm).then(
        (projects) => dispatch(receiveSearch(projects))
        )
}