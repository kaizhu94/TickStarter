import React from 'react';

import { Route } from 'react-router-dom';
import LoginFormContainer from './session_forms/login_form_container';

// import {AuthRoute} from '../util/route_util'

const App = () => {
  return (
      <div>
			<header>
				<h1>TickStarter</h1>
			    {/* <Route path="/login" component={LoginFormContainer} />   */}
			</header>
		</div>
	);
}

export default App;