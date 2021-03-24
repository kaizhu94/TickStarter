import { connect } from 'react-redux';

import {fetchAllItems} from '../../actions/item_actions';
import {fetchAllRewards } from '../../actions/reward_action'
import { openModal, closeModal } from '../../actions/modal_actions';

import Rewards from './Rewards'

const msp = state =>{
    
    return ({
        items: state.entities.items,
        rewards: state.entities.rewards
    })
}

const mdp = dispatch=>{
    return ({
        receiveAllItems: (project_id)=> dispatch(fetchAllItems(project_id)),
        receiveAllRewards: (proejctID) => dispatch(fetchAllRewards(proejctID)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()) 
    })
}
export default connect(msp, mdp)(Rewards);