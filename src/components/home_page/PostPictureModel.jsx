import React, { useState } from "react";
import { Image, Modal, Button, Form } from "react-bootstrap";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import PanoramaIcon from "@mui/icons-material/Panorama";
import YouTubeIcon from "@mui/icons-material/YouTube";
import DescriptionIcon from "@mui/icons-material/Description";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatIcon from "@mui/icons-material/Chat";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function ProfileModal({
  showPostPicture,
  setShowPostPicture,
  authorized,
  postId,
}) {
  const [values, setValues] = useState(null);

  const target = (e) => {
    setValues(e.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      let formdata = new FormData();
      formdata.append("post", values);

      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "POST",
          body: formdata,
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        }
      );
      setShowPostPicture(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={showPostPicture} onHide={() => setShowPostPicture(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Create a post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="position-relative d-flex mb-3">
          <div className="post-input-model d-flex">
            <Image className="img-fluid" src={authorized.image} />
            <div>
              <p className="mb-0">
                <strong>{authorized.name}</strong>
              </p>
              <Button>
                <p className="mb-0">
                  <span>
                    <PublicRoundedIcon />{" "}
                  </span>
                  Anyone{" "}
                </p>
              </Button>{" "}
            </div>
          </div>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="file"
            placeholder="Psot picture"
            onChange={target}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer className="posting_model_footer_cont">
        <div className="posting_model_footer_group_btn_1">
          {/* ================================= */}
          <div>
            <lable id="post_img_btn">
              <input type="file" />
              <PanoramaIcon
                fontSize="large"
                style={{ color: "#666666" }}
              />{" "}
              Text
            </lable>
          </div>
          {/* ================================= */}

          <div>
            <YouTubeIcon fontSize="large" style={{ color: "#666666" }} />
          </div>

          <div>
            <DescriptionIcon fontSize="large" style={{ color: "#666666" }} />
          </div>

          <div className="d-none d-lg-inline">
            <BusinessCenterIcon fontSize="large" style={{ color: "#666666" }} />
          </div>

          <div className="d-none d-lg-inline">
            <Brightness7Icon fontSize="large" style={{ color: "#666666" }} />
          </div>

          <div className="d-none d-lg-inline">
            <EqualizerIcon fontSize="large" style={{ color: "#666666" }} />
          </div>

          <div>
            <MoreHorizIcon fontSize="large" style={{ color: "#666666" }} />
          </div>
        </div>

        <Button
          className="posting_model_post_btn"
          variant="primary"
          onClick={() => handleSubmit()}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProfileModal;
