import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
import Routes from './Routes';

function App() {
	console.debug('App');

	return (
		<div className="App container">
			<header className="App-header jumbotron mt-2">
				<h1 className="App-title display-4">Microblog</h1>
				<p className="lead">Blogging is back. Join the fun!</p>
				<nav>
					<NavLink exact to="/">
						Blog
					</NavLink>
					<NavLink exact to="/new">
						Add a new post
					</NavLink>
				</nav>
			</header>

			<Routes />
		</div>
	);
}

export default App;
