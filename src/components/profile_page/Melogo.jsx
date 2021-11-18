import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Melogo({ title, authorized }) {
	const getprofile = async () => {
		try {
			let url = 'https://linkedin-backend-strive.herokuapp.com/profile';
		} catch (error) {
			console.log(error);
		}
	};
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
