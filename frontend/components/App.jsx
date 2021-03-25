import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util'

import SignupFormContainer from './session_forms/SignupFormConatiner'
import LoginFormContainer from './session_forms/LoginFormContainer';
import NavBarContainer from './NavBarContainer';
import MainContentContainer from './MainContentContainer'
import Modal from './modal/Modal'
import FooterConatiner from './footer/FooterConatiner'
import NewProjectNavContainer from './NavBar/NewProjectNavContainer'
import NewProjectFormContainer from './project_forms/NewProjectFormContainer'
import ProjectDashboardNavBar from './NavBar/ProjectDashboardNavContainer'
import ProjectDashbordContainer from './project_forms/ProjectDashbordContainer'
import EditProfileNavContainer from './NavBar/EditProfileNavContainer'
import EditProjectContainer from './project_forms/EditProjectContainer'
import ProjectShowContainer from './project/ProjectShowContainer'
import BackingContainer from './project/BackingContainer'
import BackingNavBar from './NavBar/BackingNavBar'
import SearchResultContainer from '../components/search/SearchResultContainer'
import ProjectByCatContainer from './project_by_sections/ProjectByCatContainer'

const App = () => {
  return (
      <div>
		  	<Modal />

			<header className='header'>
				<Switch>
					<ProtectedRoute path='/projects/new' component={NewProjectNavContainer}/>
					<ProtectedRoute path='/projects/:projectId/dashboard' component={ProjectDashboardNavBar}/>
					<ProtectedRoute path='/projects/:projectId/edit/:id' component={EditProfileNavContainer}/>
					<ProtectedRoute path='/projects/:projectId/backing' component={BackingNavBar}/>
					<Route path='/signup' component={NavBarContainer} />
					<Route path='/login' component={NavBarContainer} />
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
					<ProtectedRoute path='/projects/:projectId/backing' component={BackingContainer}/>
					<Route path='/projects/:projectId' component={ProjectShowContainer}/>
					<Route path='/search' component={SearchResultContainer} />
					<Route path='/cat/:catId' component={ProjectByCatContainer} />
					<Route path='/' component={MainContentContainer} />
				</Switch>
			</section>
			
			<footer className='footer-section'>
				<Switch>
					<Route exact path='/' component={FooterConatiner} />
					<Route exact path='/signup' component={FooterConatiner} />
					<Route exact path='/login' component={FooterConatiner} />
					<Route exact path='/projects/:projectId' component={FooterConatiner} />
					<Route exact path='/cat/:catId' component={FooterConatiner} />
				</Switch>
			</footer>
			
		</div>
	);
}

export default App;