import { connect } from 'react-redux'

import { signup, receiveErrors} from '../../actions/session_action'

import SignupForm from './SignupForm'

const msp = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    // loggedIn: Boolean(state.session.id)
  })
}

const mdp = (dispatch, ownProps) => {
  return {
    signup: (user) => dispatch(signup(user)),
    clearErrors: (error) => dispatch(receiveErrors(error))
  };
}

export default connect(msp, mdp)(SignupForm)