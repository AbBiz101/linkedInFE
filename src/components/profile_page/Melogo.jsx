import React, { useState, useEffect } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Melogo({ title, authorized }) {
	const [posts, setPosts] = useState([]);

	// let getdata = async () => {
	// 	try {
	// 		const response = await fetch(
	// 			'https://linkedin-backend-strive.herokuapp.com/profile',
	// 		);
	// 		if (response.ok) {
	// 			const data = await response.json();
	// 			let posts = data;

	// 			setPosts(posts);
	// 			console.log('POSTS========Feed.jsx');
	// 			console.log(posts);
	// 		} else {
	// 			console.log('rr after the fetch');
	// 		}
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	// useEffect(() => {
	// 	getdata();
	// }, []);

	return (
		<div className="headericons_avatar">
			<img src={authorized.image} alt="" />
			<div className="header_title_container">
				<h6 className="header_title">{title}</h6>
				<ArrowDropDownIcon />
			</div>
		</div>
	);
}
