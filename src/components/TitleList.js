import React, { useState, useEffect } from 'react';
import './TitleList.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTitlesFromAPI } from '../actions/titles';
import { sendVoteToAPI } from '../actions/posts';

/* Render list of blog titles sorted by number of votes: 
      Highest vote count first
*/

const TitleList = () => {
	console.debug('TitleList');

	const titles = useSelector((st) => st.titles);
	const dispatch = useDispatch();
	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(
		() => {
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

	const vote = (direction, id) => {
		dispatch(sendVoteToAPI(id, direction));
	};

	// If List not loaded, render loading message
	if (isLoading) return <b>Loading...</b>;

	// If no posts in database, render message
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
							<small>{title.votes} votes</small>
							<i
								className="fas fa-thumbs-up text-success ml-2"
								onClick={(evt) => vote('up', title.id)}
							/>
							<i
								className="fas fa-thumbs-down text-danger ml-2"
								onClick={(evt) => vote('down', title.id)}
							/>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default TitleList;
