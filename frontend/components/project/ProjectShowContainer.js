import { connect } from 'react-redux';

import {fetchProjects} from '../../actions/project_actions';
import { updateFrom, deleteFrom } from '../../actions/from_action'

import ProjectShow from './ProjectShow'

const msp = (state, ownprops) =>{
    
    return ({
        user: state.entities.users[state.session.id],
        projects: state.entities.projects.published_projects,
        isLogged: Boolean(state.session.id),
    })
}

const mdp = dispatch=>{
    return ({
        receiveProjects: () => dispatch(fetchProjects()),
        updateFrom: (from) => dispatch(updateFrom(from)),
        deleteFrom: () => dispatch(deleteFrom()),
    })
}
export default connect(msp, mdp)(ProjectShow);