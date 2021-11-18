import React, { useState, useEffect } from 'react';
import Postinput from './Postinput';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';
import MessageIcon from '@mui/icons-material/Message';
import CommentModel from './CommentModel';
import { Icon } from '@mui/material';


export default function PostLikes (postId, profile) {

 const [likes, setLikes] = useState(0);


 let comment = 'd-Block';
 const classNameToggle = () => {
     if (comment === 'd-none') {
         comment = 'd-Block';
         
     } else {
         comment = 'd-none';
     }
    //  console.log(comment);
 };

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
            // console.log(numberOfLikes)
            setLikes(numberOfLikes);
            // console.log("post likes: ", likes);
            
        } else {
            console.log('err after the fetch');
        }
    } catch (err) {
        console.log(err);
    }
};

const postAlike = async (postId) => {
    const userId = {"user": "61922d744ec449283427a7b2"}
    try {
        const response = await fetch(
            
            `https://linkedin-backend-strive.herokuapp.com/posts/${postId}/likes`,
            {
                method: 'POST',
                body: userId,
                
            },
        );

        

        console.log(response);
        if (response.ok) {
           
            getLikes(postId)
        }
      

    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
    getLikes(postId.postId);
    
    // console.log("searching the user", profile)
}, [likes]);


return (
    <>
    <div className="d-inline-flex">
    <ThumbUpAltIcon style={{width:"15px", marginLeft:"15px", color: "#0000FF"}}/>
	<p style={{fontSize: "15px", marginLeft:"5px"}}>{likes} likes</p>
    </div>
    <div className="poster_icon" style={{borderTop: "1px solid grey"}}>
					
						<div className="button" onClick={()=>postAlike(postId.postId)}>
							<Postinput Icon={ThumbUpAltIcon} title="Like"  />
                            
						</div>
                        <div className="button" onClick={()=>classNameToggle()}>
						<Postinput
							Icon={MessageIcon}
							title="Comment"
						/>
                        </div>
						<Postinput Icon={ShareIcon} title="Share" />
						<Postinput Icon={SendIcon} title="Send" />
					</div>
                    <div className={comment}>
						<CommentModel postId={postId}/>
					</div>

    </>

)

}