import React, { useEffect, useState } from "react";
import { Image, Modal, Button, Form } from "react-bootstrap";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";

function DeletePostModel({ showDelete, setShowDelete, postId }) {
  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        }
      );
      if (response.ok) {
        setShowDelete(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("delete is about heppan");
    console.log(postId);
  }, [postId]);

  return (
    <Modal
      dialogClassName="delete_model"
      show={showDelete}
      onHide={() => setShowDelete(false)}
    >
      <Modal.Header className="delete_model_header" closeButton>
        <Modal.Title>Delete post?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you want to permanently remove this post from LinkedIn?
        </p>
      </Modal.Body>
      <Modal.Footer className="delete_model_footer">
        <Button
          className="posting_model_delete_btn"
          variant="secondary"
          onClick={() => setShowDelete(false)}
        >
          Close
        </Button>
        <Button
          className="posting_model_post_btn"
          variant="primary"
          onClick={() => handleSubmit()}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeletePostModel;
