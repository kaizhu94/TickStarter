import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {AuthRoute} from '../util/route_util'

import SignupFormContainer from './session_forms/SignupFormConatiner'
import LoginFormContainer from './session_forms/LoginFormContainer';
import NavBarContainer from './NavBarContainer';
import MainContents from './MainContents';
import Modal from './modal/Modal'
import Footer from './footer/Footer'
import LearnStartAProject from './project/LearnStartAProject'

const App = () => {
  return (
      <div>
		  	<Modal />

			<header className='header'>
				<Switch>
					<Route path='/signup' component={NavBarContainer} />
					<Route path='/login' component={NavBarContainer} />
					<Route path='/' component={NavBarContainer} />
				</Switch>
			</header>

			<section className="main-section">
				<Switch>
					<AuthRoute path="/signup" component={SignupFormContainer} />
					<AuthRoute path="/login" component={LoginFormContainer} />
					<Route exact path="/learn" component={LearnStartAProject} />   
					<Route path='/' component={MainContents} />
				</Switch>
			</section>
			
			<footer className='footer-section'>
				<Footer/>
			</footer>
			
		</div>
	);
}

export default App;