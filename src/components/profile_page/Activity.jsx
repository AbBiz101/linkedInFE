import React from 'react';

export default function Activity() {
	return (
		<div className="activity">
			<h5 className="activity_title">Activity</h5>
			<h6 className="activity_sub_title">63 followers</h6>
			<div className="activity_bottom_list">
				<img
					className="img-fluid wiges_onlibottom_listimg"
					src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
				/>
				<div className="activity_onlybottom_list_txt">
					<h5>Lorem, ipsum dolor onsectetur</h5>
					<p>User Comented</p>
				</div>
			</div>
			<div>
				<h6>See all activity</h6>
			</div>
		</div>
	);
}
