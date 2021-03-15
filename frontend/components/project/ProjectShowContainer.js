import { connect } from 'react-redux';

import {fetchProject} from '../../actions/project_actions'

import ProjectShow from './ProjectShow'

const msp = (state, ownprops) =>{
    debugger
    return ({
        project: state.entities.projects[ownprops.match.params.projectId]
    })
}

const mdp = dispatch=>{
    return ({
        receiveProject: (projectId) => dispatch(fetchProject(projectId)),
    })
}
export default connect(msp, mdp)(ProjectShow);