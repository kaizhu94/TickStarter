import { connect } from 'react-redux';

import { updateItem } from '../../actions/item_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import EditItemForm from './EditItemForm'

const msp = state =>{
    
    return ({
    })
}

const mdp = dispatch=>{
    return ({
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        updateItem: (item) => dispatch(updateItem(item)),
    })
}
export default connect(msp, mdp)(EditItemForm);