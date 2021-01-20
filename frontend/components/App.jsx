import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {AuthRoute} from '../util/route_util'
import { Link } from 'react-router-dom';

import SignupFormContainer from './session_forms/SignupFormConatiner'
import LoginFormContainer from './session_forms/LoginFormContainer';
import NavBarContainer from './NavBarContainer';

const App = () => {
  return (
      <div>
			<header className='header'>
				<h1>TickStarter</h1>
				<NavBarContainer />
			</header>
			<Switch>
				<AuthRoute path="/signup" component={SignupFormContainer} />
			    <AuthRoute path="/login" component={LoginFormContainer} />  
			</Switch>
		</div>
	);
}

export default App;