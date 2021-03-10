import { connect } from 'react-redux';

import {fetchAllItems} from '../../actions/item_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import Rewards from './Rewards'

const msp = state =>{
    // debugger
    return ({
        items: state.entities.items
    })
}

const mdp = dispatch=>{
    return ({
        receiveAllItems: (project_id)=> dispatch(fetchAllItems(project_id)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()) 
    })
}
export default connect(msp, mdp)(Rewards);