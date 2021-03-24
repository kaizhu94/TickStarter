import { connect } from 'react-redux';

import { updateReward } from '../../actions/reward_action'
import { createItem } from '../../actions/item_actions';

import EditRewardForm from './EditRewardForm'

const msp = state =>{
    
    return ({
        allItems: state.entities.items
    })
}

const mdp = dispatch=>{
    return ({
        updateReward: (reward) => dispatch(updateReward(reward)),
        createItem: item => dispatch(createItem(item)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
    })
}
export default connect(msp, mdp)(EditRewardForm);