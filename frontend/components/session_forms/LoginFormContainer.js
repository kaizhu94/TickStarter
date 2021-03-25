import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { login } from '../../actions/session_action'
import { openModal, closeModal } from '../../actions/modal_actions';
const msp = (state, ownprops) => {
  
  return ({
      // is_login: Boolean(state.session.id),
      errors: state.errors.session,
  })
}

const mdp = (dispatch) => {
  return {
    logIn: user => dispatch(login(user)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
  };
}

export default connect(msp, mdp)(LoginForm)