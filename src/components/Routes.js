import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Post from './Post';
import Home from './Home';
import NewPost from './NewPost';

const Routes = () => {
	console.debug('Routes');

	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>

			<Route exact path="/new">
				<NewPost />
			</Route>

			<Route exact path="/:postId">
				<Post />
			</Route>

			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
