import React from 'react';
import TitleList from './TitleList';

/* Home Page: renders a list of titles

    Called by Routes
*/

const Home = () => {
	console.debug('Home');

	return (
		<div>
			<TitleList />
		</div>
	);
};

export default Home;
