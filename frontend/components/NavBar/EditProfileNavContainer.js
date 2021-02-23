import { connect } from 'react-redux';
import {fetchProject} from '../../actions/project_actions'

import EditProfileNavBar from './EditProfileNavBar'
const msp = (state, ownprops) =>{
    return ({
        project: state.entities.projects[ownprops.match.params.projectId]
    })
}

const mdp = dispatch=>{
    return {
        receiveProject: projectId => dispatch(fetchProject(projectId)),
      };
}

export default connect(msp, mdp)(EditProfileNavBar)