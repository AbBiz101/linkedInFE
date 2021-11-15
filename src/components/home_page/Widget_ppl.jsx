import React from 'react'
import AddIcon from '@mui/icons-material/Add';
export default function Widget_ppl() {
    return (
			<div className="wiges_bottom_list">
				<img
					className="img-fluid wiges_bottom_listimg"
					src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
				/>

				<div className="wiges_bottom_list_txt">
					<h4>Name</h4>
					<p>Discription</p>

					<button className="follow_btn">
						<div>
							<AddIcon fontSize="small" />
							<p className="d-inline">Follow</p>
						</div>
					</button>
				</div>
			</div>
		);
}

