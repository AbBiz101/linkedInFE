import { fetchData } from './assats/js';
import { useState, useEffect } from 'react';
import './assats/css/home_page css/Post.css';
import './assats/css/home_page css/Feed.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assats/css/home_page css/Footer.css';
import './assats/css/home_page css/Widget.css';
import './assats/css/home_page css/Sidebar.css';
import './assats/css/home_page css/Homepage.css';
import './assats/css/profile_page css/Navbar.css';
import './assats/css/home_page css/Postinput.css';
import './assats/css/profile_page css/Melogo.css';
import './assats/css/profile_page css/Activity.css';
import './assats/css/profile_page css/Edu_list.css';
import './assats/css/profile_page css/Interests.css';
import './assats/css/home_page css/CommentModel.css';
import './assats/css/home_page css/PostingModel.css';
import './assats/css/profile_page css/Experience.css';
import Navbar from './components/profile_page/Navbar';
import './assats/css/profile_page css/Footer_big.css';
import './assats/css/profile_page css/ProfileMode.css';
import './assats/css/profile_page css/HeaderIcons.css';
import HomePage from './components/home_page/Homepage';
import './assats/css/profile_page css/Yourdashboard.css';
import './assats/css/profile_page css/Dashboardlist.css';
import './assats/css/profile_page css/profile_layout.css';
import './assats/css/profile_page css/Experiance_mode.css';
import './assats/css/profile_page css/Skills_endorsements.css';
import InnerLayout from './components/profile_page/InnerLayout';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	const [authorized, setAuthorized] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		let getData = async () => {
			let user = await fetchData('me', 'GET');
			setAuthorized(user);
			setIsLoading(false);
		};
		getData();
	}, []);

	// console.log({ authorized });
	return (
		<div className="App">
			{authorized && !isLoading && (
				<Router>
					<Navbar authorized={authorized} />
					<Route
						path="/"
						exact={true}
						render={(props) => (
							<HomePage {...props} profile={profile} authorized={authorized} />
						)}
					/>
					<Route
						path="/profile/:userId"
						exact={true}
						render={(props) => (
							<InnerLayout
								{...props}
								authorized={authorized}
								profile={profile}
								setProfile={setProfile}
							/>
						)}
					/>
					{/* FOOTER HERE */}
				</Router>
			)}
		</div>
	);
}

export default App;
