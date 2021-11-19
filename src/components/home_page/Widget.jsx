import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Hidden from '@mui/material/Hidden';
import { useState, useEffect } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Widget_ppl from './Widget_ppl';
import Widget_ad from './Widget_ad';
import Footer from './Footer';
export default function Widget() {
	const [isLoading, setIsLoading] = useState(true);
	const [userdata, setUserdata] = useState([]);
	let getdata = async () => {
		try {
			const response = await fetch(
				'https://linkedin-backend-strive.herokuapp.com/profile ',
				{
					method: 'Get',
				},
			);
			if (response.ok) {
				const data = await response.json();
				let req = data.slice(0, 3);
				setUserdata(req);
				// console.log('POSTSlol======');
				// console.log(req);
				setIsLoading(false);
			} else {
				console.log('rr after the fetch');
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getdata();
	}, []);

	return (
		<Hidden mdDown>
			<div className="wiges">
				<div className="wiges_top">
					<div className="head_top">
						<h5>Add to your feed</h5>
						<AddBoxIcon />
					</div>

					{!isLoading && userdata.map((user) => <Widget_ppl props={user} />)}

					<div className="head_topbotom">
						<h6>
							View all recommendations <ArrowRightAltIcon />
						</h6>
					</div>
				</div>

				<div className="wiges_bottom">
					<div className="head_bottom">
						<h5>Promoted</h5>
						<MoreHorizIcon />
					</div>

					<Widget_ad />
					<Widget_ad />
					<Widget_ad />
				</div>
				<Footer />
			</div>
		</Hidden>
	);
}
