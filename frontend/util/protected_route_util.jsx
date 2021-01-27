import React from 'react';
import {withRouter, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'


const Auth = ({ component: Component, path, isLogged, exact }) => {
	return (
    <Route
		path={path}
		exact={exact}
		render={(props) =>
			(isLogged ? <Component {...props} /> : <Redirect to="/login" />)
		}
    />
    )};

const msp = (state) => {
	return { isLogged: Boolean(state.session.id) };
};

export const ProtectedRoute = withRouter(connect(msp, null)(Auth));