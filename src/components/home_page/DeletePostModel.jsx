import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function DeletePostModel({ showDelete, setShowDelete, postId, setPosts }) {
	const [values, setValues] = useState({});
	// const [posts, setPosts] = useState([]);

	const getpost = async () => {
		try {
			const response = await fetch(
				'https://linkedin-backend-strive.herokuapp.com/posts ',
				{
					method: 'GET',
				},
			);
			if (response.ok) {
				const data = await response.json();

				let posts = data.reverse().slice(0, 150);
				console.log('inside get post ===========================');
				console.log(data.length, data, 'length POSTS inside getPOST');
				setPosts(posts);
			} else {
				console.log('error after the fetch');
			}
		} catch (err) {
			console.log(err);
		}
	};

	//first Delete the posts
	// then retrieved the remaning posts
	// update the posts state

	const handleSubmit = async () => {
		try {
			const response = await fetch(
				`https://linkedin-backend-strive.herokuapp.com/posts/${postId}`,
				{
					method: 'DELETE',
				},
			);
			console.log(
				response,
				'res from DELETE =<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<,',
			);
			if (response.ok) {
				console.log(
					'inside response.ok handle submit //////////////////////////////////',
				);
				setShowDelete(false);
				await getpost();
				console.log('Post Deleted');
			}
		} catch (error) {
			console.log(error);
		}
	};

	// useEffect(() => {
	// 	console.log('inside use effect lisnening showDelete')
	// 	getpost();
	// }, [showDelete]);

	return (
		<Modal
			dialogClassName="delete_model"
			show={showDelete}
			onHide={() => setShowDelete(false)}
		>
			<Modal.Header className="delete_model_header" closeButton>
				<Modal.Title>Delete post?</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					Are you sure you want to permanently remove this post from LinkedIn?
				</p>
			</Modal.Body>
			<Modal.Footer className="delete_model_footer">
				<Button
					className="posting_model_delete_btn"
					variant="secondary"
					onClick={() => setShowDelete(false)}
				>
					Close
				</Button>
				<Button
					className="posting_model_post_btn"
					variant="primary"
					onClick={() => handleSubmit()}
				>
					Delete
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default DeletePostModel;
