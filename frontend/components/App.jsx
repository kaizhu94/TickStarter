import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {AuthRoute} from '../util/route_util'
import { Link } from 'react-router-dom';

import SignupFormContainer from './session_forms/SignupFormConatiner'
import LoginFormContainer from './session_forms/LoginFormContainer';
import NavBarContainer from './NavBarContainer';
import MainContents from './MainContents';
import Modal from './modal/Modal'

const App = () => {
  return (
      <div>
		  	<Modal />
			<header className='header'>
				<NavBarContainer />
			</header>
			<section className="main-section">
				<Switch>
					<AuthRoute path="/signup" component={SignupFormContainer} />
					<AuthRoute path="/login" component={LoginFormContainer} />  
					<Route path='/' component={MainContents} />
				</Switch>
			</section>
		</div>
	);
}

export default App;