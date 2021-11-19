import { React, useEffect, useState } from "react";
import { Form, Button, Dropdown } from "react-bootstrap";
import Melogo from "../profile_page/Melogo";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import { Image } from "react-bootstrap";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import Postinput from "./Postinput";

export default function CommentModel(postId, showComments) {
  const [comments, setComments] = useState(null);
  const [comment, setComment] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  let getComments = async (postId) => {
    try {
      const response = await fetch(
        `https://linkedin-backend-strive.herokuapp.com/posts/${postId}/comments`,
        {
          methode: "GET",
          /* headers: {
						Authorization: process.env.REACT_APP_API_KEY,
					}, */
        }
      );
      if (response.ok) {
        console.log("get response", response);
        const data = await response.json();
        setComments(data);

        setIsLoading(false);

        console.log("post comments: ", data);
      } else {
        console.log("err after the fetch");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (postId) => {
    try {
      const response = await fetch(
        `https://linkedin-backend-strive.herokuapp.com/posts/${postId.postId}/comments`,
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(postId.postId);
      console.log("looking for the problem", comment);
      if (response.ok) {
        let data = await response.json();
        console.log(data.toObject);
        console.log("post response", response);
        getComments(postId.postId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (postId, commentId) => {
    try {
      const response = await fetch(
        `https://linkedin-backend-strive.herokuapp.com/posts/${postId}/comments/${commentId}`,
        {
          method: "DELETE",
        }
      );
      console.log(response, "res from DELETE a comment");
      if (response.ok) {
        getComments(postId.postId);
        console.log("comment Deleted: ", commentId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editComment = async (postId, commentId) => {
    try {
      const response = await fetch(
        `https://linkedin-backend-strive.herokuapp.com/posts/${postId}/comments/${commentId}`,
        {
          method: "PUT",
          body: JSON.stringify(comment),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();

        console.log("put response", response);
        getComments(postId.postId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    
	getComments(postId.postId)
  }, []);

  return (
	  
    <>
	
      <div className="px-3 posting_area_commenting">
        <div className="px-1">
          <AccountCircleOutlinedIcon fontSize="large" />
        </div>
        <div className="mb-2 post-input-filed">
          <div className="comment_adding_part">
            <div className="mr-5">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
               
              >
                <Form.Control
                  as="textarea"
                  placeholder="Add Comment"
                  rows={1}
                  value={comment.comment}
                  onChange={(e) =>
                    setComment({ ...comment, comment: e.target.value })
                  }
                />
              </Form.Group>
            </div>
            <div className="ml-5 comment_adding_img">
              <div>
                <EmojiEmotionsIcon />
              </div>
              <div>
                <PhotoSizeSelectActualIcon />
              </div>
            </div>

		
            <div className="posting_area_commenting">
              <Button
                className=" posting_model_post_btn"
                variant="primary"
                style={{ height: "30px", width: "50px", marginRight: "5px" }}
                onClick={() => handleSubmit(postId.postId)}
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
      
	  
      {!isLoading && 
        comments.map((comment) => (
          <div className="comments justify-content-between">
			  <div className="userComment">
			 <Postinput Icon={AccountCircleOutlinedIcon} title="Admin"  />
			 <div className="cmt">{comment.comment}</div>
			 </div>
			
			  <div className="comment-edit">
				
              <Dropdown className="commentDropDown">
                <Dropdown.Toggle id="dropdown-basic">
                  <MoreHorizRoundedIcon
                    style={{ color: "#717171", margin: "0px ​0px 0px -8p" }}
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                   onClick={() => {editComment(postId.postId, comment._id)}}
							
                  >
                    Edit
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => deleteComment(postId.postId, comment._id)}
                  >
                    Delete
                  </Dropdown.Item>

                  <Dropdown.Item>Another action</Dropdown.Item>
                  <Dropdown.Item>Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>  
			  </div>
			
         
            
            
          </div>
        ))}
    </>
  );
}
