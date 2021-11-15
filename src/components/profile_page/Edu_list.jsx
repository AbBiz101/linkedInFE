import ReorderIcon from '@mui/icons-material/Reorder';
import React, { useEffect, useState } from 'react';
import Edu_list from './Edu_list';
import AddIcon from '@mui/icons-material/Add';
import { Modal, Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
export default function Esdu_list() {
	const [educationModel, setEducationModel] = useState(false);
	const [dateSelected, setDateSelected] = useState(null);
	const [enddateSelected, setEnddateSelected] = useState(null);
	return (
		<>
			<Modal
				size="lg"
				show={educationModel}
				onHide={() => setEducationModel(false)}
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Add education
					</Modal.Title>
				</Modal.Header>
				<Modal.Body class="from__body">
					<div className="input_form">
						<div className="input_title">
							<label>School*</label>
							<Form.Control type="text" placeholder="Ex: Strive School" />
						</div>

						<div className="input_comp_name">
							<label>Degree</label>
							<Form.Control type="text" placeholder="Ex: Bachelor's" />
						</div>

						<div className="input_city">
							<label>Field of study </label>
							<Form.Control type="text" placeholder="Ex: Business" />
						</div>
						<div className="input_date">
							<div className="start_date">
								<div>
									<label>Start date*</label>
									<Form>
										<DatePicker
											value={dateSelected}
											selected={dateSelected}
											onChange={(date) => setDateSelected(date)}
											isClearable
											showYearDropdown
											scrollableMonthYearDropdown
										/>
									</Form>
								</div>
								<div>
									<label>End date*</label>
									<Form>
										<DatePicker
											value={enddateSelected}
											selected={enddateSelected}
											onChange={(date) => setEnddateSelected(date)}
											isClearable
											showYearDropdown
											scrollableMonthYearDropdown
										/>
									</Form>
								</div>
							</div>
						</div>

						<div className="input_headline">
							<label>Grade</label>
							<Form.Control type="text" placeholder="Ex: 3.5" />
						</div>

						<div className="input_description">
							<label>Activities and societies</label>
							<Form.Group
								className="mb-3"
								controlId="exampleForm.ControlTextarea1"
							>
								<Form.Control
									class="input_description_text"
									as="textarea"
									rows={3}
								/>
							</Form.Group>
						</div>

						<div className="input_description">
							<label>Description</label>
							<Form.Group
								className="mb-3"
								controlId="exampleForm.ControlTextarea1"
							>
								<Form.Control
									class="input_description_text"
									as="textarea"
									rows={3}
								/>
							</Form.Group>
						</div>

						<div className="input_last">
							<h5>Media</h5>
							<h6>
								Add or link to external documents, photos, sites, videos, and
								presentations.
							</h6>
							<h6>Learn more</h6>
							<br />
							{/* ==================== IMGAE INPUT========================================  */}

							<button>
								<h5>
									<AddIcon />
									Add Meddia
								</h5>
							</button>
							{/* ==================== IMGAE INPUT========================================  */}
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer className="footer_button">
					<Button>
						<h5> Save </h5>
					</Button>
				</Modal.Footer>
			</Modal>
			<div className="edu_list_list">
				<div className="edu_list_sublist">
					<img
						className="img-fluid wiges_onlibottom_listimg"
						src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
					/>

					<div className="edu_list_list_txt">
						<h5>Uni name</h5>
						<p>User Comented</p>
						<p>User Comented</p>
					</div>
				</div>
				<div className="btns_vertical_edit">
					<EditOutlinedIcon
						onClick={() => setEducationModel(true)}
						fontSize="large"
						style={{ color: '#a1a09e' }}
					/>
					<ReorderIcon
						onClick={() => setEducationModel(true)}
						fontSize="large"
						style={{ color: '#a1a09e' }}
					/>
				</div>
			</div>
		</>
	);
}
