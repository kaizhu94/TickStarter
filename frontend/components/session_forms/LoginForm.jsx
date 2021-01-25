import React from 'react'
import { Link } from 'react-router-dom'


class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password:""
        }
        this.handleSubmit =this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.logIn(this.state)
        .then(this.props.openModal('errors'))
        .then(this.props.closeModal)
    }

    update(key){
        return e => this.setState({[key]: e.currentTarget.value});
    }
    render(){
        
        return (
            <div className='login-container'>
                <div className='login-block'>
                    <form onSubmit={this.handleSubmit} className='login-form'>
                        <div id='login-header'> 
                            <h1 id = 'login-text'>Log in</h1>
                        </div>
                        <input type="email"
                                value={this.state.email}
                                placeholder="Email"
                                onChange ={this.update('email')}
                        />
                        <input type='password'
                                value={this.password}
                                placeholder='Password'
                                onChange = {this.update('password')}
                        />
                        <button type = "submit" >Log in</button>
                    </form>
                    <p id='signup-link'>New to KickStarter? <Link to='/signup' id='signup-link-button'> Sign up</Link></p>
                    <p id='term'>This site is protected by reCAPTCHA and the Google <span>Privacy Policy</span> and <span>Terms of Service</span> apply.</p>
                </div>
            </div>
        )
    }

}

export default LoginForm;