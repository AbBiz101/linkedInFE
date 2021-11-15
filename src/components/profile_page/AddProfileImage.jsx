import React, { useState } from "react";
import { Image, Modal, Button, Form } from "react-bootstrap";
import MultiMenus from "../../assats/css/profile_page css/profile-picUpdate-Model.css";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import DoneIcon from "@mui/icons-material/Done";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
function AddProfileImage({ picUpdate, setPicUpdate, authorized, fetchUser }) {
  const [picture, setPicture] = useState(null);

  const uploadPicture = async () => {
    try {
      let formdata = new FormData();
      formdata.append("profile", picture);

      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${authorized._id}/picture`,
        {
          method: "POST",
          body: formdata,
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        }
      );
      if (response.ok) {
        setPicUpdate(false);
        fetchUser();
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={picUpdate} onHide={() => setPicUpdate(false)}>
      {/* <Modal show={picUpdate} onHide={() => setPicUpdate(false)}> */}
      <Modal.Header className="img-upload-box" closeButton>
        <Modal.Title>Profile Picture</Modal.Title>
      </Modal.Header>
      <Modal.Body className="profile-pic-update-body">
        <div className="img-container d-flex justify-content-center">
          <Image className="img-fluid" src={authorized.image} />
        </div>

        {/* <Form.Control
          type="file"
          placeholder="update picture"
          onChange={(e) => setPicture(e.target.files[0])}
        /> */}
      </Modal.Body>
      <Modal.Footer className="img-upload-box-footer">
        <label class="custom-file-upload">
          <EditOutlinedIcon fontSize="large" />
          <p>Edit</p>
        </label>

        <label class="custom-file-upload">
          <input type="file" onChange={(e) => setPicture(e.target.files[0])} />
          <AddAPhotoOutlinedIcon fontSize="large" />
          <p>Add Photo</p>
        </label>

        <label class="custom-file-upload">
          <PhotoSizeSelectActualOutlinedIcon fontSize="large" />
          <p>Frames</p>
        </label>

        <Button className="final_btn__" onClick={() => uploadPicture()}>
          <DoneIcon fontSize="large" />
          <p> Post </p>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddProfileImage;
