import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { login } from '../../actions/session_action'

const mStP = (state) => {
  debugger;
  return ({
      // is_login: Boolean(state.session.id),
      // formType: 'Log In',
      errors: state.errors.session,
  })
}

const mDtP = (dispatch) => {
  return {
    logIn: user => dispatch(login(user))
  };
}

export default connect(mStP, mDtP)(LoginForm)