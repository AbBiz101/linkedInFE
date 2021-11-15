import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Skil_list from './Skil_list';
import AddIcon from '@mui/icons-material/Add';
import { Modal, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useState, useEffect } from 'react';

export default function Skills_endorsements() {
	return (
		<div className="skills_endorsements">
			<div className="adding_edu">
				<h4 className="endorsements_title">Skills & endorsements</h4>
				<div className="skills-button">
					<h5>Add a new skill</h5>
					<button>
						<ModeEditIcon fontSize="large" />
					</button>
				</div>
			</div>

			<button>
				<h5>Take skill quiz</h5>
			</button>
			<Skil_list />
			<Skil_list />
			<Skil_list />
			<Skil_list />
			<div>
				<h5>
					Show more <ArrowDropDownIcon />
				</h5>
			</div>
		</div>
	);
}
