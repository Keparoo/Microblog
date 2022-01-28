import React, { useState, useEffect } from 'react';
import './TitleList.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTitlesFromAPI } from '../actions/titles';

const TitleList = () => {
	console.debug('TitleList');

	const titles = useSelector((st) => st.titles);
	const dispatch = useDispatch();
	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(
		function() {
			async function fetchTitle() {
				await dispatch(fetchTitlesFromAPI());
				setIsLoading(false);
			}

			if (isLoading) {
				fetchTitle();
			}
		},
		[ dispatch, isLoading ]
	);

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
