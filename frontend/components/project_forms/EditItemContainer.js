import { connect } from 'react-redux';

import { openModal, closeModal } from '../../actions/modal_actions';
import EditItemForm from './EditItemForm'

const msp = state =>{
    // debugger
    return ({
    })
}

const mdp = dispatch=>{
    return ({
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    })
}
export default connect(msp, mdp)(EditItemForm);