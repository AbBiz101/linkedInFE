import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react';

export default function Widget_ppl(user) {
	useEffect(() => {
		// console.log(user);
	}, []);
	return (
		<div className="wiges_bottom_list">
			<img className="img-fluid wiges_bottom_listimg" src={user.props.image} />

			<div className="wiges_bottom_list_txt">
				<h4>
					{user.props.name} {user.props.surname}
				</h4>
				<p>{user.props.title}</p>

				<button className="follow_btn">
					<div>
						<AddIcon fontSize="small" />
						<p className="d-inline">Follow</p>
					</div>
				</button>
			</div>
		</div>
	);
}
