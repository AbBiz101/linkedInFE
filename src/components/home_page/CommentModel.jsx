import { React, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Melogo from '../profile_page/Melogo';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import { Image } from 'react-bootstrap';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

export default function CommentModel(postId) {

	const [comments, setComments] = useState(null)
	const [comment, setComment] = useState({})
	const [isLoading, setIsLoading] = useState(true)

	let getComments = async (postId) => {

		try {
			const response = await fetch(
				`https://linkedin-backend-strive.herokuapp.com/posts/${postId}/comments` ,
				{
					methode: 'GET',
					/* headers: {
						Authorization: process.env.REACT_APP_API_KEY,
					}, */
				},
			);
			if (response.ok) {
				console.log("get response", response)
				const data = await response.json();
				setComments(data);
				
				setIsLoading(false)
				
				console.log("post comments: ", data);
				
			} else {
				console.log('err after the fetch');
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleSubmit = async (postId) => {
		try {
			const response = await fetch(
				`https://linkedin-backend-strive.herokuapp.com/posts/${postId.postId}/comments`,
				{
					method: 'POST',
					body: JSON.stringify(comment), 
					headers: {
						"Content-Type": "application/json"
					},
					
				},
			);
			console.log(postId.postId)
            console.log("looking for the problem", comment)
			if (response.ok) {
				
				let data = await response.json();
				console.log(data.toObject);
				console.log("post response", response)
                getComments(postId.postId)
			
			}
		} catch (error) {
			console.log(error);
		}
	};


	useEffect(() => {
		console.log(comments);
	}, [comments]);

	return (
	<>
		<div className="px-3 posting_area_commenting">
			<div className="px-1">
				<AccountCircleOutlinedIcon fontSize="large" />
				</div>
			<div className="mb-2 post-input-filed">
				<div className="comment_adding_part">
					<div className="mr-5" >
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{backgroundColor:"transparent"}}>
					<Form.Control
						as="textarea"
						placeholder="Add Comment"
						rows={1}
					     value={comment.comment} 
						onChange={(e) => setComment({...comment, comment: e.target.value})}
					/>
					
				</Form.Group>
					</div>
					<div className="ml-5 comment_adding_img">
						<div>
							<EmojiEmotionsIcon />
						</div>
						<div>
							<PhotoSizeSelectActualIcon />
						</div>
					</div>
					<div className="posting_area_commenting">
				<Button
					className=" posting_model_post_btn"
					variant="primary"
					style={{height: "30px", width: "50px", marginRight:"5px"}}
					onClick={() => handleSubmit(postId.postId)}
				>
					Post
				</Button>
				</div>
					
				</div>
				
			</div>
			
			
		</div>

	 	{!isLoading &&  comments.map(comment => (
			<div className="comments">
				<div className="poster_header pt-3">
					

						<div className="header_name">
							<p className="mt-1">
								
								<PublicOutlinedIcon className="ml-1" fontSize="small" />
							</p>
						</div>
					</div>
					<div className="poster_blog">
						<p>{comment.comment}</p>
					</div>
					{/* <div className="img_container">
						<p>{comment.user.name}</p>
					</div> */}
			</div>
		))} 
		</>
  
	);
}
