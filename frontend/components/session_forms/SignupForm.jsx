import React from 'react'
import { Link } from 'react-router-dom'


class SignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }
        this.handleSubmit =this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.signup(this.state)
    }

    update(key){
        return e => this.setState({[key]: e.currentTarget.value});
    }
    render(){
        const errors = this.props.errors.map((error,i) =>{
            return (
                <li key={`error-${i}`}>{error}</li>
            )
        })
        return (
            <div className = 'signup-form'>
                 <p>Have an account?<Link to='/login' >Log in</Link></p>
                 <h1>Sign up</h1>
                 <ul className='signup-errors'>
                    {errors}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                            value={this.state.username}
                            placeholder="Username"
                            onChange ={this.update('username')}
                    />
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

                    <button type = "submit">Create account</button>
                </form>
            </div>
        )
    }
}

export default SignupForm;