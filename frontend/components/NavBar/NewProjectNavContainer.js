import { connect } from 'react-redux';
import { logout } from '../../actions/session_action'
import NewProjectNavBar from './NewProjectNavBar'
// const msp = state =>{
//     return ({
        
//     })
// }

const mdp = dispatch=>{
    //   
    return ({
        logout: () => dispatch(logout())
    })
}
export default connect(null, mdp)(NewProjectNavBar);

