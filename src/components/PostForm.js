import React, { useState } from 'react';
import './NewPost.css';

/* Render New/Edit post form

    Call the parent (POST) on edit or cancel click
*/

const PostForm = ({
	post = { title: '', description: '', body: '' },
	save,
	cancel
}) => {
	console.debug('PostForm');

	const [ form, setForm ] = useState({
		title: post.title,
		description: post.description,
		body: post.body
	});

	// Handle changes in the form
	function handleChange(e) {
		const { name, value } = e.target;
		setForm((f) => ({ ...f, [name]: value }));
	}

	// Handle submit: call parent function save
	function handleSubmit(e) {
		e.preventDefault();
		save({ ...form });
	}

	return (
		<form className="mb-4" onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="title">Title:</label>
				<input
					className="form-control"
					type="text"
					name="title"
					id="title"
					onChange={handleChange}
					value={form.title}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="description">Description:</label>
				<input
					className="form-control"
					type="text"
					name="description"
					id="description"
					onChange={handleChange}
					value={form.description}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="body">Body:</label>
				<textarea
					className="form-control"
					rows={10}
					name="body"
					id="body"
					onChange={handleChange}
					value={form.body}
				/>
			</div>
			<button className="btn btn-primary mr-2">Save</button>
			<button onClick={cancel} className="btn btn-secondary">
				Cancel
			</button>
		</form>
	);
};

export default PostForm;
