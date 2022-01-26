import React from 'react';
import './App.css';
import Routes from './Routes';

function App() {
	console.debug('App');

	return (
		<div className="App container">
			<header className="App-header jumbotron mt-2">
				<h1 className="App-title display-4">Microblog</h1>
				<p className="lead">Blogging is back. Join the fun!</p>
				<nav>
					<a href="/">Blog</a>
					<a href="/">Add a new post</a>
				</nav>
			</header>

			<Routes />
		</div>
	);
}

export default App;
