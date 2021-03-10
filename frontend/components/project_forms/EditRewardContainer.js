import { connect } from 'react-redux';


import EditRewardForm from './EditRewardForm'

const msp = state =>{
    // debugger
    return ({
    })
}

const mdp = dispatch=>{
    return ({
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
    })
}
export default connect(msp, mdp)(EditRewardForm);