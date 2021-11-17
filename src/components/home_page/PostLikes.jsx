import React, { useState, useEffect } from 'react';
import Postinput from './Postinput';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';
import MessageIcon from '@mui/icons-material/Message';


export default function PostLikes (postId, profile) {

 const [likes, setLikes] = useState(0);

let getLikes = async (postId) => {

    try {
        const response = await fetch(
            `https://linkedin-backend-strive.herokuapp.com/posts/${postId}/likes` ,
            {
                methode: 'GET',
                headers: {
                    Authorization: process.env.REACT_APP_API_KEY,
                },
            },
        );
        if (response.ok) {
            const data = await response.json();
            let likes = data
            let numberOfLikes = likes.length
            console.log(numberOfLikes)
            setLikes(numberOfLikes);
            console.log("post likes: ", likes);
            
        } else {
            console.log('err after the fetch');
        }
    } catch (err) {
        console.log(err);
    }
};

const postAlike = async (postId) => {
    const userId = this.params.username;
    try {
        const response = await fetch(
            
            `https://linkedin-backend-strive.herokuapp.com/posts/${postId}/likes`,
            {
                method: 'POST',
                body: userId ,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: process.env.REACT_APP_API_KEY,
                },
            },
        );
        
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
    getLikes(postId.postId);
    console.log("searching the user", profile)
}, [likes]);


return (
    <>
    <div>
    <Postinput Icon={ThumbUpAltIcon} title="" />
	<p>{likes}</p>
    </div>
    <div className="poster_icon" style={{borderTop: "1px solid grey"}}>
					
						<div className="button" >
							<Postinput Icon={ThumbUpAltIcon} title="Like" />
						</div>
						<Postinput
							Icon={MessageIcon}
							title="Comment"
							/* onClick={classNameToggle} */
						/>
						<Postinput Icon={ShareIcon} title="Share" />
						<Postinput Icon={SendIcon} title="Send" />
					</div>
    </>

)

}