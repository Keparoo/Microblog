import React, { useState } from 'react';
import './TitleList.css';
import { Link } from 'react-router-dom';

const TitleList = () => {
	console.debug('TitleList');

	const titles = [];
	const [ isLoading, setIsLoading ] = useState(true);

	if (isLoading) return <b>Loading...</b>;

	if (!isLoading && titles.length === 0) {
		return <b>No posts yet. Please add a post!</b>;
	}

	return (
		<div className="row">
			{titles.map((title) => (
				<div key={title.id} className="col">
					<div className="card">
						<div className="card-body">
							<div className="card-title">
								<Link to={'/' + title.id}>{title.title}</Link>
							</div>
							<div className="card-text">
								<i>{title.description}</i>
							</div>
						</div>
						<div className="card-footer">
							<small>Card footer</small>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default TitleList;
