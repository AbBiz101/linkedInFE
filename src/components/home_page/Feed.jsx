import Post from './Post';
import PostModel from './PostModel';
import Postinput from './Postinput';
import Melogo from '../profile_page/Melogo';
import { React, useState, useEffect } from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArticleIcon from '@mui/icons-material/Article';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export default function Feed({ authorized, profile }) {
	const [show, setShow] = useState(false);
	const [posts, setPosts] = useState([]);

	// getting all posts
	let getdata = async () => {
		try {
			const response = await fetch(
				'https://linkedin-backend-strive.herokuapp.com/posts ',
				{
					method: 'Get',

				},
			);
			if (response.ok) {
				const data = await response.json();
				let posts = data.reverse().slice(0, 150);
				setPosts(posts);
				console.log('POSTS========Feed.jsx');
				console.log(posts);
			} else {
				console.log('rr after the fetch');
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getdata();
	}, [show]);

	return (
		<>
			<PostModel
				show={show}
				setShow={setShow}
				getdata={getdata}
				authorized={authorized}
			/>

			<div className="feeds">
				<div className="feeding">
					<div className="posting_area">
						<Melogo authorized={authorized} />
						<div
							className="mr-2 post-input-filed"
							onClick={() => setShow(true)}
						>
							Start a post
						</div>
					</div>
					<div className="postoption">
						<Postinput
							color="#70B5F9"
							Icon={AddPhotoAlternateIcon}
							title="Photo"
						/>
						<Postinput color="#7FC15E" Icon={YouTubeIcon} title="Video" />
						<Postinput color="#E7A33E" Icon={DateRangeIcon} title="Event" />
						<Postinput
							color="#FC9295"
							Icon={ArticleIcon}
							title="Write artice"
						/>
					</div>
				</div>

				<div className="postfeed">
					<Post
						posts={posts}
						profile={profile}
						authorized={authorized}
						getdata={getdata}
						setPosts={setPosts}
					/>
				</div>
			</div>
		</>
	);
}
