import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Hidden from '@mui/material/Hidden';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Widget_ppl from './Widget_ppl';
import Widget_ad from './Widget_ad';
import Footer from './Footer';
export default function Widget() {
	return (
		<Hidden mdDown>
			<div className="wiges">
				<div className="wiges_top">
					<div className="head_top">
						<h5>Add to your feed</h5>
						<AddBoxIcon />
					</div>

					<Widget_ppl />
					<Widget_ppl />
					<Widget_ppl />

					<div className="head_topbotom">
						<h6>
							View all recommendations <ArrowRightAltIcon />
						</h6>
					</div>
				</div>

				<div className="wiges_bottom">
					<div className="head_bottom">
						<h5>Promoted</h5>
						<MoreHorizIcon />
					</div>

					<Widget_ad />
					<Widget_ad />
					<Widget_ad />
				</div>
				<Footer />
			</div>
		</Hidden>
	);
}
