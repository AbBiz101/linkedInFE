import { React, useState } from 'react';
import Melogo from '../profile_page/Melogo';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
export default function CommentModel() {
	return (
		<div className="px-3 posting_area_commenting">
			<div className="px-1">
				<AccountCircleOutlinedIcon fontSize="large" />
			</div>
			<div className="mb-2 post-input-filed">
				<div className="comment_adding_part">
					<div className="mr-5">Add Comment</div>
					<div className="ml-5 comment_adding_img">
						<div>
							<EmojiEmotionsIcon />
						</div>
						<div>
							<PhotoSizeSelectActualIcon />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
