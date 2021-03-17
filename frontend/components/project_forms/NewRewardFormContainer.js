import { connect } from 'react-redux';

import { createItem } from '../../actions/item_actions';
import { createReward } from '../../actions/reward_action';

import NewRewrdForm from './NewRewardForm'

const msp = state =>{
    debugger
    return ({
        allItems: state.entities.items
    })
}

const mdp = dispatch=>{
    return ({
        createItem: item => dispatch(createItem(item)),
        createReward: reward => dispatch(createReward(reward)),
    })
}
export default connect(msp, mdp)(NewRewrdForm);