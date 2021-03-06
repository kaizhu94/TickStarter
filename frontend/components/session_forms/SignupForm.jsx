import React from 'react'
import { Link } from 'react-router-dom'


class SignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            reEmail: "",
            rePassword: "",
            showDropdownEmail: false,
            showDropdownPassword: false,
            addFrontError: false
        }
        this.errors=[];
        this.handleSubmit =this.handleSubmit.bind(this);
        this.showReEmail = this.showReEmail.bind(this);
        this.showRePassword = this.showRePassword.bind(this);
    }

    componentWillUnmount(){
        this.props.clearErrors([]);
    }

    handleSubmit(e){
        e.preventDefault();
        let newState = Object.assign({},this.state);
        delete newState["reEmail"];
        delete newState["rePassword"];
        delete newState["showDropdownEmail"];
        delete newState["showDropdownPassword"];
        
        const {email, password, reEmail, rePassword} = this.state;
        
        if(email !== reEmail || password !== rePassword){
            this.setState({
                password: "",
                rePassword: "",
                addFrontError: true
            });
        }else{
            this.setState({
                password: "",
                rePassword: "",
                addFrontError: false
            });
            this.props.signup(newState)
        }
    }

    update(key){
        return e => this.setState({[key]: e.currentTarget.value});
    }

    showReEmail(e){
        // let newState = !this.state.showDropdownEmail;
        this.setState({showDropdownEmail: true})
    }
    showRePassword(e){
        // let newState = !this.state.showDropdownPassword;
        this.setState({showDropdownPassword: true})
    }
    render(){
        let errors = [...this.props.errors];
        if(this.state.addFrontError){
            errors.push("Email or Password did not match")
        }
        errors = errors.map((error,i) =>{
            return (
                <li key={`error-${i}`}>{error}</li>
            )
        })
        
        return (
            <div className = 'signup-container'>
                <div className = 'signup-block'> 
                    <div className='log-in'>
                        <p>Have an account?<Link to='/login' id='login-link'> Log in</Link></p>
                    </div>
                    <div className = 'signup-form'>
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
                                            onFocus = {this.showReEmail}
                                />
                                {
                                    this.state.showDropdownEmail ? (
                                        <input type="email"
                                        value={this.state.reEmail}
                                        placeholder="Re-enter Email"
                                        onChange ={this.update('reEmail')}
                                        />
                                    ):(null)
                                }

                            
                                <input type='password'
                                        value={this.state.password}
                                        placeholder='Password'
                                        onChange = {this.update('password')}
                                        onFocus = {this.showRePassword}
                                />
                                {
                                            this.state.showDropdownPassword ? (
                                                <input type="password"
                                                    value={this.state.rePassword}
                                                    placeholder="Re-enter Password"
                                                    onChange ={this.update('rePassword')}
                                                />
                                            ):(null)
                                    }

                            <button type = "submit" id='signup-button'>Create account</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupForm;