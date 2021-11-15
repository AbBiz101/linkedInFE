import { Avatar } from "@material-ui/core";
import React from "react";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";
import Hidden from "@mui/material/Hidden";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Sidebar({ authorized }) {
  const recentitem = (text) => (
    <div className="recentitembox">
      <span className="recentitem_#">#</span>
      <p className="recentitem_p">{text}</p>
    </div>
  );

  return (
		<div className="sidebar">
			<div className="sidebar_main">
				<div className="sidebar_avatar">
					<Image
						className="img-fluid"
						src="https://ischool.uw.edu/sites/default/files/2017-08/george_header.jpg"
					/>
					<div className="sidebar-user-profile-img mb-3">
						<Image class="img-fluid" src={authorized.image} />
					</div>
					<Link to={'/profile/me'}>
						<h3 className="h3user_name_hunted">{authorized.name}</h3>
					</Link>

					<h5>{authorized.title}</h5>
				</div>

				<div className="sidebar_texts">
					<div className="textclass_1">
						<h6 className="text">Connections</h6>
						<h6 className="number">121</h6>
					</div>

					<div className="textclass_1">
						<h6 className="text">Who viewed you</h6>
						<h6 className="number">21</h6>
					</div>
					<Hidden smDown>
						<div className="textclass_2">
							<h6>
								<AssistantPhotoIcon color="success" />
								Try Premium for free
							</h6>
						</div>
						<div className="textclass_2">
							<h6>
								<TurnedInIcon /> My items
							</h6>
						</div>
					</Hidden>
				</div>
			</div>
			<Hidden smDown>
				<div className="sidebar_recent">
					<h5>Recent</h5>
					<div>
						{recentitem('Lorem ipsum dolor sit amet ')}
						{recentitem('Praesentium, placeat? Veritatis, quia!')}
						{recentitem('laborum temporibus nam hic')}
						{recentitem('Lorem ipsum dolor sit amet ')}
						{recentitem('Praesentium, placeat? Veritatis, quia!')}
						{recentitem('laborum temporibus nam hic')}
					</div>
				</div>
			</Hidden>
		</div>
	);
}
