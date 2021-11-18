import { Image, Button, Spinner } from 'react-bootstrap';
import '../../assats/css/profile_page css/people_view.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';

const Peopleviewed = ({ title, userData, isLoading }) => {
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
				let req = data.reverse().slice(0, 5);
				setUserdata(req);
				// console.log('POSTS======');
				// console.log(req);
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
		<div class="p-3 pl-4 pb-4 mb-3 i_found_the_container bg-light rounded aside">
			<div className="peope-view-user-card">
				<h6>{title}</h6>
				{isLoading && (
					<div className="text-center">
						<Spinner animation="border" variant="success" />
					</div>
				)}
				{/* card below here */}
				{userdata &&
					userdata.map((user) => (
						<div className="pt-3 d-flex key={user._id}">
							<Image src={user.image} />
							<div className="people-view-2">
								<Link to={`/profile/`}>
									<p className="mb-0">
										<strong className="pr-2">{user.name}</strong>
										<strong>{user.surname}</strong>
									</p>
									<p className="mb-0 text-muted">
										<small>{user.title}</small>
									</p>
								</Link>
								<div className="mx-3 pt-2 btn-people-view-connect position-relative">
									<Button type="button">
										<AddIcon />
										Follow
									</Button>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};
export default Peopleviewed;
