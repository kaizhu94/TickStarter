import { connect } from 'react-redux';

import {fetchAllRewards } from '../../actions/reward_action';
import {fetchProject} from '../../actions/project_actions';

import Backing from './Backing'

const msp = (state, ownprops) =>{
    return ({
        rewards: state.entities.rewards,
        project: state.entities.projects[ownprops.match.params.projectId],
        userId: state.session.id
    })
}

const mdp = dispatch=>{
    return ({
        receiveAllRewards: (proejctID) => dispatch(fetchAllRewards(proejctID)),
        receiveProject: (projectId) => dispatch(fetchProject(projectId)),
    })
}
export default connect(msp, mdp)(Backing);