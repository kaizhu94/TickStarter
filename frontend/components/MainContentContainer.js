import { connect } from 'react-redux'

import { fetchProjects } from '../actions/project_actions'

import MainContents from './MainContents'

const msp = state =>{
    return ({
        // isLoggedIn: Boolean(state.session),
        currentUser: state.entities.users[state.session.id],
        publishedProjects: state.entities.projects.published_projects
    })
}
const mdp = dispatch=>{
    return ({
        fetchProjects: () => dispatch(fetchProjects())
    })
}

export default connect(msp, mdp)(MainContents)