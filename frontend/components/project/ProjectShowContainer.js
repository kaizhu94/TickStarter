import { connect } from 'react-redux';

import {fetchProjects} from '../../actions/project_actions'

import ProjectShow from './ProjectShow'

const msp = (state, ownprops) =>{
    debugger
    return ({
        user: state.entities.users[state.session.id],
        projects: state.entities.projects.published_projects
    })
}

const mdp = dispatch=>{
    return ({
        receiveProjects: (userId) => dispatch(fetchProjects(userId)),
    })
}
export default connect(msp, mdp)(ProjectShow);