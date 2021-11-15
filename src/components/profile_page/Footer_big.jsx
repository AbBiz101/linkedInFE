import React from 'react';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import { Container, Form } from 'react-bootstrap';

export default function Footer_big() {
	return (
		<Container className="profil_page footer_big">
			<div className="d-none d-sm-inline footer_box_1">
				<img
					height="25px"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
				/>
				<ui>
					<li>About</li>
					<li>Community</li>
					<li>Guidelines</li>
					<li>Privacy & Terms</li>
					<li>About</li>
				</ui>
				<p>LinkedIn Corporation © 2021</p>
			</div>

			<div className=" d-none d-lg-inline footer_box_2">
				<ui>
					<li>Accessibility</li>
					<li>Careers</li>
					<li>Ad Choices</li>
					<li>Mobile</li>
					<li>About</li>
				</ui>
			</div>

			<div className=" d-none d-md-inline footer_box_3">
				<ui>
					<li>Talent Solutions</li>
					<li>Marketing Solutions</li>
					<li>Advertising</li>
					<li>Small Business</li>
				</ui>
			</div>

			<div className=" d-none d-sm-inline footer_box_4">
				<div className="footer_box_44">
					<HelpIcon cclassName="bigfootericons" />
					<div>
						<h5>Questions?</h5>
						<p>Visit our Help Center.</p>
					</div>
				</div>

				<div className="footer_box_44">
					<SettingsIcon className="bigfootericons" />
					<div>
						<h5>Manage your account...</h5>
						<p>Go to your Settings.</p>
					</div>
				</div>
			</div>

			<div className="d-none d-sm-inline footer_box_5">
				<p>Select Language</p>
				<Form.Control as="select">
					<option>English (English )</option>
					<option>Mandarin Chinese</option>
					<option>Spanish</option>
				</Form.Control>
			</div>
		</Container>
	);
}
