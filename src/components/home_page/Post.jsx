import Postinput from './Postinput';
import { Link } from 'react-router-dom';
import CommentModel from './CommentModel';
import EditpostModel from './EditpostModel';
import DeletePostModel from './DeletePostModel';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';
import React, { useState, useEffect } from 'react';
import MessageIcon from '@mui/icons-material/Message';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { Dropdown, DropdownButton, Button, Image, R } from 'react-bootstrap';
import { borderBottom } from '@mui/system';
import PostLikes from './PostLikes';

export default function Post({
	profile,
	authorized,
	posts,
	getdata,
	setPosts,
}) {
	const [show, setShow] = useState(false);

	const [showPostPicture, setShowPostPicture] = useState(false);

	const [showDelete, setShowDelete] = useState(false);

	const postTimer = (x) => {
		const postedDateISO = x;
		const postedDate = new Date(postedDateISO).getTime();
		const dateToday = new Date().getTime();
		const milliseconds = Math.abs(dateToday - postedDate).toString();

		const minutes = parseInt(milliseconds / 1000 / 60);
		const hours = parseInt(minutes / 60);
		const days = parseInt(hours / 24);
		let date;

		if (days > 0) {
			date = `${days} d`;
		} else if (days == 0 && hours >= 1) {
			date = `${hours} hr`;
		} else if (hours < 1) {
			date = `${minutes} min`;
		}
		return date;
	};

	const [postId, setPostId] = useState();

	const [comment, setComment] = useState('d-none');

	const classNameToggle = () => {
		if (comment === 'd-none') {
			setComment('');
		} else {
			setComment('d-none');
		}
	};

	/* 
	useEffect(() => {
		getLikes(posts)
	}, [likes]); */

	return (
		<>
			<EditpostModel
				show={show}
				setShow={setShow}
				authorized={authorized}
				postId={postId}
				getdata={getdata}
			/>
			<DeletePostModel
				showDelete={showDelete}
				setShowDelete={setShowDelete}
				postId={postId}
				setPosts={setPosts}
			/>

			{posts.map((post) => (
				<div className="post" key={post._id}>
					<div className="position-relative">
						<div className="post-edit">
							{
								<>
									<Dropdown>
										<Dropdown.Toggle id="dropdown-basic">
											<MoreHorizRoundedIcon
												style={{ color: '#717171', margin: '0px ???0px 0px -8p' }}
											/>
										</Dropdown.Toggle>
										<Dropdown.Menu>
											<Dropdown.Item
												onClick={() => {
													setShow(true);
													setPostId(post._id);
												}}
											>
												Edit
											</Dropdown.Item>
											<Dropdown.Item
												onClick={() => {
													setShowDelete(true);
													setPostId(post._id);
												}}
											>
												Delete
											</Dropdown.Item>

											<Dropdown.Item>Another action</Dropdown.Item>
											<Dropdown.Item>Something else</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</>
							}
						</div>
					</div>
					
					{/* ========================================*/}
					<div className="poster_header pt-3">
						<Image src={post.user.image} />
						{/* {console.log(profile)} */}
						<div className="header_name">
							<h4 className="user_name_hunted">
								{post.user.name} {post.user.surname}
							</h4>
							{/* <Link to={`/profile/${post.user._id}`}>
							</Link> */}
							<p className="mt-1">{post.user.title}</p>
							<p className="mt-1">
								{postTimer(post.createdAt)}.
								<PublicOutlinedIcon className="ml-1" fontSize="small" />
							</p>
						</div>
					</div>
					{/* ==========================================*/}
					<div className="poster_blog">
						<p>{post.text}</p>
					</div>
					<div className="img_container">
						{post.image === 'empty' ? (
							<Image className="d-none img-fluid" src={post.image} />
						) : (
							<Image className="img-fluid" src={post.image} />
						)}
					</div>

					<div className="post_likes">
						<PostLikes postId={post._id} profile={profile} />
					</div>
				</div>
			))}
		</>
	);
}
