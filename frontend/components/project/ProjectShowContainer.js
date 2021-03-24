import { connect } from 'react-redux';

import {fetchProjects} from '../../actions/project_actions'

import ProjectShow from './ProjectShow'

const msp = (state, ownprops) =>{
    
    return ({
        user: state.entities.users[state.session.id],
        projects: state.entities.projects.published_projects
    })
}

const mdp = dispatch=>{
    return ({
        receiveProjects: () => dispatch(fetchProjects()),
    })
}
export default connect(msp, mdp)(ProjectShow);