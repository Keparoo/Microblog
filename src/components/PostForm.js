import React, { useState } from 'react';
// import uuidv4 from "uuid/v4";
import './NewPost.css';

const DEFAULT_FORM = {
	title: '',
	description: '',
	body: ''
};

const PostForm = ({ addPost }) => {
	const [ form, setForm ] = useState(DEFAULT_FORM);

	function handleChange(e) {
		const { name, value } = e.target;
		setForm((f) => ({ ...f, [name]: value }));
	}

	// addPost({ ...form, id: uuidv4() });
	function handleSubmit(e) {
		e.preventDefault();
		addPost({ ...form });
		setForm(DEFAULT_FORM);
	}

	const cancel = () => {
		return;
	};

	return (
		<div>
			<h1>New Post</h1>
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
					<label htmlFor="title">Description:</label>
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
					<label htmlFor="title">Body:</label>
					<input
						className="form-control"
						type="textarea"
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
		</div>
	);
};

export default PostForm;
