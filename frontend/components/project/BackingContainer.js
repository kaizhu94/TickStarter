import { connect } from 'react-redux';

import {fetchAllRewards } from '../../actions/reward_action'

import Backing from './Backing'

const msp = (state, ownprops) =>{
    debugger
    return ({
        rewards: state.entities.rewards
    })
}

const mdp = dispatch=>{
    return ({
        receiveAllRewards: (proejctID) => dispatch(fetchAllRewards(proejctID)),
    })
}
export default connect(msp, mdp)(Backing);