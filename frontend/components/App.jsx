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
import ProjectDashboardNavBar from './NavBar/ProjectDashboardNavContainer'
import ProjectDashbordContainer from './project_forms/ProjectDashbordContainer'
import EditProfileNavContainer from './NavBar/EditProfileNavContainer'
import EditProjectContainer from './project_forms/EditProjectContainer'
import ProjectShowContainer from './project/ProjectShowContainer'

const App = () => {
  return (
      <div>
		  	<Modal />

			<header className='header'>
				<Switch>
					<Route path='/signup' component={NavBarContainer} />
					<Route path='/login' component={NavBarContainer} />
					<ProtectedRoute path='/projects/new' component={NewProjectNavContainer}/>
					<ProtectedRoute path='/projects/:projectId/dashboard' component={ProjectDashboardNavBar}/>
					<ProtectedRoute path='/projects/:projectId/edit/:id' component={EditProfileNavContainer}/>
					<Route path='/' component={NavBarContainer} />
				</Switch>
			</header>

			<section className="main-section">
				<Switch>
					<AuthRoute path="/signup" component={SignupFormContainer} />
					<AuthRoute path="/login" component={LoginFormContainer} /> 
					<ProtectedRoute path='/projects/new' component={NewProjectFormContainer}/> 
					<ProtectedRoute path='/projects/:projectId/dashboard' component={ProjectDashbordContainer}/>
					<ProtectedRoute path='/projects/:projectId/edit/:id' component={EditProjectContainer}/>
					<ProtectedRoute path='/projects/:projectId' component={ProjectShowContainer}/>
					<Route path='/' component={MainContentContainer} />
				</Switch>
			</section>
			
			<footer className='footer-section'>
				<Switch>
					<Route exact path='/' component={Footer} />
					<Route exact path='/signup' component={Footer} />
					<Route exact path='/login' component={Footer} />
					<Route exact path='/projects/:projectId' component={Footer} />
				</Switch>
			</footer>
			
		</div>
	);
}

export default App;