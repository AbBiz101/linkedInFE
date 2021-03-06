import React, { useState } from 'react';
import { Image, Modal, Button, Form, Container } from 'react-bootstrap';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import PanoramaIcon from '@mui/icons-material/Panorama';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DescriptionIcon from '@mui/icons-material/Description';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatIcon from '@mui/icons-material/Chat';
import Hidden from '@mui/material/Hidden';
import Postinput from './Postinput';

function ProfileModal({ show, setShow, authorized, getdata }) {
	const [values, setValues] = useState();
	const [image, setImage] = useState(null);

	const handleSubmit = async () => {
		try {
			const response = await fetch(
				'https://linkedin-backend-strive.herokuapp.com/posts',
				{
					method: 'POST',
					body: JSON.stringify({
						text: values,
						user: '6194d84aad6c687f678236e0',
					}),
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);

			if (response.ok) {
				let data = await response.json();
				console.log(data);
				if (image) {
					try {
						let formdata = new FormData();
						formdata.append('img', image);
						console.log(formdata);
						const response = await fetch(
							`https://linkedin-backend-strive.herokuapp.com/posts/${data._id}/picture`,
							{
								method: 'PUT',
								body: formdata,
							},
						);
						if (response) {
							setShow(false);
							getdata();
						}
					} catch (error) {
						console.log(error);
					}
				}
				setShow(false);
				getdata();
			}
			setValues('');
		} catch (error) {
			console.log(error);
		}
	};

	const addHashtag = (e) => {
		e.preventDefault();
		let str = '#';
		// let content = "";
		// content += str.repeat(1);
		return str;
	};
	return (
		<Modal
			dialogClassName="posting_model"
			size="lg"
			show={show}
			onHide={() => setShow(false)}
		>
			<Modal.Header closeButton>
				<Modal.Title>Create a post</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="position-relative d-flex mb-3">
					<div className="post-input-model d-flex">
						<Image className="img-fluid" src={authorized.image} />
						<div>
							<p className="mb-0">
								<strong>{authorized.name}</strong>
							</p>
							<Button>
								<p className="mb-0">
									<span>
										<PublicRoundedIcon />{' '}
									</span>
									Anyone{' '}
								</p>
							</Button>{' '}
						</div>
					</div>
				</div>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Control
						as="textarea"
						placeholder="What do you want to talk about?"
						value={values}
						onChange={(e) => setValues(e.target.value)}
					/>
				</Form.Group>
				<div>
					<Button
						className="hastag_posting_btn"
						onClick={(e) => setValues(...addHashtag(e))}
					>
						Add hastag
					</Button>
				</div>
			</Modal.Body>
			<Modal.Footer className="posting_model_footer_cont">
				<div className="posting_model_footer_group_btn_1">
					{/* ================================= */}
					<div className="position-relative">
						<label class="file-upload">
							<input
								type="file"
								//onChange={(e) => console.log(e.target.files[0])}
								onChange={(e) => setImage(e.target.files[0])}
							/>
							<PanoramaIcon fontSize="large" style={{ color: '#666666' }} />
						</label>
					</div>

					{/* ================================= */}

					<div>
						<YouTubeIcon fontSize="large" style={{ color: '#666666' }} />
					</div>

					<div>
						<DescriptionIcon fontSize="large" style={{ color: '#666666' }} />
					</div>

					<div className="d-none d-lg-inline">
						<BusinessCenterIcon fontSize="large" style={{ color: '#666666' }} />
					</div>

					<div className="d-none d-lg-inline">
						<Brightness7Icon fontSize="large" style={{ color: '#666666' }} />
					</div>

					<div className="d-none d-lg-inline">
						<EqualizerIcon fontSize="large" style={{ color: '#666666' }} />
					</div>

					<div>
						<MoreHorizIcon fontSize="large" style={{ color: '#666666' }} />
					</div>
				</div>

				<div className=" d-none d-sm-inline posting_model_footer_group_btn_2">
					<ChatIcon style={{ color: '#666666' }} />
					Anyone
				</div>

				<Button
					className="posting_model_post_btn"
					variant="primary"
					onClick={() => handleSubmit()}
				>
					Post
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default ProfileModal;
