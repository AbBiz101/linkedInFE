import React from 'react';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import MoneyIcon from '@mui/icons-material/Money';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
export default function Dashboardlist() {
	return (
		<div className="dashboardlist">
			<ul>
				<li>
					<SettingsInputAntennaIcon  fontSize="large" />
					<div className="list_text">
						<h4>Creator mode: Off </h4>
						<p>
							Grow your audience and get discovered by highlighting content on
							your profile.
						</p>
					</div>
				</li>

				<li>
					<PeopleAltIcon  fontSize="large" />
					<div className="list_text">
						<h4>My Network </h4>
						<p>Manage your connections, events, and interests.</p>
					</div>
				</li>

				<li>
					<MoneyIcon fontSize="large" />
					<div className="list_text">
						<h4>Salary insights</h4>
						<p>See how your salary compares to others in the community.</p>
					</div>
				</li>

				<li>
					<SettingsInputAntennaIcon  fontSize="large" />
					<div className="list_text">
						<h4>My items </h4>
						<p>Keep track of your jobs, courses and articles.</p>
					</div>
				</li>
			</ul>
		</div>
	);
}
