import React from 'react';
import HeaderIcons from './HeaderIcons';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AppsIcon from '@mui/icons-material/Apps';
import Hidden from '@mui/material/Hidden';
import { withRouter } from 'react-router';
import Melogo from './Melogo';
import { Link } from 'react-router-dom';
import { Image, Container } from 'react-bootstrap';

function Navbar({ authorized }) {
	return (
		<div className="w-100 bg-white">
			<Container className="header">
				<div className="header_left position-relative">
					<Link to={'/'}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="34"
							height="34"
							viewBox="0 0 34 34"
							class="global-nav__logo"
						>
							<title>LinkedIn</title>

							<g>
								<path
									d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
									fill="currentColor"
								></path>
							</g>
						</svg>
					</Link>
					<div className="header_search">
						<div className="d-none d-sm-inline">
							<SearchIcon className="header_search_icon" />
						</div>
						<input
							type="text"
							className="d-none d-lg-inline"
							placeholder="Search"
							id=""
						/>
					</div>
				</div>

				<div className="header_right">
					<HeaderIcons to={'/'} title="Home" Icon={HomeIcon} />
					<HeaderIcons title="My Network" Icon={PeopleAltIcon} />
					<HeaderIcons title="Jobs" Icon={BusinessCenterIcon} />

					<HeaderIcons title="Messaging" Icon={SmsIcon} />
					<HeaderIcons title="Notifications" Icon={NotificationsIcon} />
					<Link to={'/profile/me'}>
						<Melogo title="ME" authorized={authorized} />
					</Link>
					<div className="line-between-profile-img-nav"></div>
					<HeaderIcons title="Work" Icon={AppsIcon} />
					<div className="notif_text d-none d-lg-inline ">
						<p className="mb-0">Try Preminum for </p>
						<p className="mb-0">Free</p>
					</div>
				</div>
			</Container>
		</div>
	);
}
export default withRouter(Navbar);
