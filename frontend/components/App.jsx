import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util'

import SignupFormContainer from './session_forms/SignupFormConatiner'
import LoginFormContainer from './session_forms/LoginFormContainer';
import NavBarContainer from './NavBarContainer';
import MainContentContainer from './MainContentContainer'
import Modal from './modal/Modal'
import Footer from './footer/Footer'
import NewProjectNavContainer from './NavBar/NewProjectNavContainer'
import NewProjectFormContainer from './project_forms/NewProjectFormContainer'

const App = () => {
  return (
      <div>
		  	<Modal />

			<header className='header'>
				<Switch>
					<Route path='/signup' component={NavBarContainer} />
					<Route path='/login' component={NavBarContainer} />
					<ProtectedRoute path='/projects/new' component={NewProjectNavContainer}/>
					<Route path='/' component={NavBarContainer} />
				</Switch>
			</header>

			<section className="main-section">
				<Switch>
					<AuthRoute path="/signup" component={SignupFormContainer} />
					<AuthRoute path="/login" component={LoginFormContainer} /> 
					<ProtectedRoute path='/projects/new' component={NewProjectFormContainer}/> 
					<Route path='/' component={MainContentContainer} />
				</Switch>
			</section>
			
			<footer className='footer-section'>
				<Switch>
					<Route exact path='/' component={Footer} />
					<Route exact path='/signup' component={Footer} />
					<Route exact path='/login' component={Footer} />
				</Switch>
			</footer>
			
		</div>
	);
}

export default App;