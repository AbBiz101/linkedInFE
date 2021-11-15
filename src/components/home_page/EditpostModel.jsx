import React, { useEffect, useState } from "react";
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
function EditpostModel({ show, setShow, authorized, postId, getdata }) {
  const [values, setValues] = useState({});
  const [post, setPost] = useState({});

  const getPost = async () => {
    try {
      console.log(postId);
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "GET",
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        setValues(data);
        console.log("fetching to update the post");
        console.log(data);
      } else {
        console.log("fetching to update the post was not OK");
      }
    } catch (error) {}
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "PUT",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
            Authorization: process.env.REACT_APP_API_KEY,
          },
        }
      );
      if (response.ok) {
        setShow(false);
        getdata();
      }
      //   alert("all done");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPost();
  }, [postId]);

  return (
    <Modal
      dialogClassName="editing_model"
      size="lg"
      show={show}
      onHide={() => setShow(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="position-relative d-flex mb-3">
          <div className="post-input-model d-flex">
            <Image className="img-fluid" src={authorized.image} />
            <div>
              <p className="mb-0">
                <strong>{authorized.name}</strong>
              </p>
            </div>
          </div>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            as="textarea"
            value={values.text}
            onChange={(e) => setValues({ ...values, text: e.target.value })}
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
            <YouTubeIcon fontSize="large" style={{ color: "#d3d3d3" }} />
          </div>

          <div>
            <DescriptionIcon fontSize="large" style={{ color: "#d3d3d3" }} />
          </div>

          <div className="d-none d-lg-inline">
            <BusinessCenterIcon fontSize="large" style={{ color: "#d3d3d3" }} />
          </div>

          <div className="d-none d-lg-inline">
            <Brightness7Icon fontSize="large" style={{ color: "#d3d3d3" }} />
          </div>

          <div className="d-none d-lg-inline">
            <EqualizerIcon fontSize="large" style={{ color: "#d3d3d3" }} />
          </div>

          <div>
            <MoreHorizIcon fontSize="large" style={{ color: "#d3d3d3" }} />
          </div>
        </div>
        <Button
          className="posting_model_post_btn"
          variant="primary"
          onClick={() => handleSubmit()}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditpostModel;
