import React from 'react';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
export default function HeaderIcons({ title, Icon, to }) {
	return (
		<div className="headericons">
			<IconButton className="header_icons" component={Link} to={to}>
				<Icon className="header_icons" src={Icon} />
			</IconButton>
			<h5 className="header_title d-none d-md-inline">{title}</h5>
		</div>
	);
}
