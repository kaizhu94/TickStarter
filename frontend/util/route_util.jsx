import React from 'react';
import {withRouter, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'


const Auth = ({ component: Component, path, isLogged, exact, from }) => {
	
	return (
    <Route
		path={path}
		exact={exact}
		render={(props) =>
			(!isLogged ? <Component {...props} /> : <Redirect to={from? from:"/"} />)
		}
    />
	)};

const Protected= ({ component: Component, path, isLogged, exact }) => {
	return (
	<Route
		path={path}
		exact={exact}
		render={(props) =>
			(isLogged ? <Component {...props} /> : <Redirect to="/login" />)
		}
	/>
	)};

const msp = (state, ownProps) => {
	
	return { isLogged: Boolean(state.session.id),
			from: state.from };
};

export const AuthRoute = withRouter(connect(msp, null)(Auth));
export const ProtectedRoute = withRouter(connect(msp, null)(Protected));