import { Link } from "@material-ui/core";
import {
  ListGroup,
  Button,
  Image,
  Col,
  Jumbotron,
  Row,
  Spinner,
} from "react-bootstrap";
import "../../assats/css/profile_page css/headeinfo.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MultiMenus from "../../assats/js/MultiMenus";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

import EditModal from "./ProfileModal";
import AddProfileImage from "./AddProfileImage";

const Wrapper = styled.aside`
  background: #c52465cc;
  width: 300px;
`;

const menus = [
  {
    label: "Intro",
    submenu: [
      {
        label:
          "Mo, your Intro is looking good! Check out other sections you can add to your profile",
      },
    ],
  },
  {
    label: "About",
    submenu: [
      {
        label: "Looking good, Mo This section is complete.",
      },
    ],
  },
  {
    label: "Featured",
    submenu: [
      {
        label: "Posts",
      },
      {
        label: "Articles",
      },
      { label: "Links" },
      {
        label: "Media",
      },
    ],
  },
  {
    label: "Background",
    submenu: [
      {
        label: "Work experience",
      },
      {
        label: "Education",
      },
      { label: "Licenses & certifications" },
      {
        label: "Volunteer experience",
      },
    ],
  },
  {
    label: "Skills",
    submenu: [
      {
        label: "skills",
      },
    ],
  },
  {
    label: "Accomplishments",
    submenu: [
      {
        label: "Publications",
      },
      {
        label: "Patents",
      },
      { label: "Courses" },
      {
        label: "Honors & awards",
      },
      {
        label: "Test scores",
      },
      {
        label: "Languages",
      },
      {
        label: "Organizations",
      },
      {
        label: "Causes",
      },
    ],
  },
  {
    label: "Additional information",
    submenu: [
      {
        label: "Request a recommendation",
      },
    ],
  },
  {
    label: "Supported languages",
    submenu: [
      {
        label: "Add profile in another language",
      },
    ],
  },
];

const Headerinfo = ({ profile, authorized, fetchUser }) => {
  const [buttonOne, setButtonOne] = useState(false);
  const [buttonTwo, setButtonTwo] = useState(false);
  const [buttonThree, setButtonThree] = useState(false);
  const [show, setShow] = useState(false);
  const [picUpdate, setPicUpdate] = useState(false);

  return (
    <>
      <EditModal
        show={show}
        setShow={setShow}
        authorized={authorized}
        fetchUser={fetchUser}
      />
      <AddProfileImage
        picUpdate={picUpdate}
        setPicUpdate={setPicUpdate}
        authorized={authorized}
        fetchUser={fetchUser}
      />
      <Jumbotron className="position-relative profile-heading-container">
        {/* {profile && isLoading && (
          <div className="text-center">
            <Spinner animation="border" variant="success" />
          </div>
        )} */}
        {profile && (
          <div>
            <div>
              <Image
                src="https://ischool.uw.edu/sites/default/files/2017-08/george_header.jpg"
                className="profile-banner"
              />
            </div>
            {authorized._id === profile._id && (
              <div className="cover-img-edit-icon">
                <div>
                  <ModeEditOutlineOutlinedIcon />
                </div>
              </div>
            )}
            {authorized._id === profile._id && (
              <Link onClick={() => setPicUpdate(true)}>
                <Image
                  src={profile.image}
                  roundedCircle
                  className="profile-img"
                  key={profile._id}
                />
              </Link>
            )}
            {authorized._id !== profile._id && (
              // <Link>
              <Image
                src={profile.image}
                roundedCircle
                className="profile-img"
                key={profile._id}
              />
              // </Link>
            )}
            {authorized._id === profile._id && (
              <div className="profile-img-edit-icon">
                <div>
                  <ModeEditOutlineOutlinedIcon onClick={() => setShow(true)} />
                </div>
              </div>
            )}

            {/* Before the user info starts */}
            <div className="profile-info">
              <Row>
                <div className="col-6">
                  <h3>
                    {profile.name}
                    <h3 className="d-inline px-2">{profile.surname}</h3>
                    <small>
                      <span className="font-weight-light">(He/Him)</span>
                    </small>
                  </h3>
                  <div className="profile-user-details">
                    <p>{profile.title}</p>
                    <p>
                      <span className="font-weight-light text-muted">
                        {profile.area},
                      </span>
                      <strong className="text-muted pl-2">
                        <Link>Contact info</Link>
                      </strong>
                    </p>
                  </div>
                </div>
                <div className="col-4 offset-2 text-muted">
                  <div className="current-work-status ">
                    <WorkOutlineOutlinedIcon />
                    <span className="pl-3">
                      <strong>Work Experience</strong>{" "}
                    </span>
                  </div>
                  <div className="current-Education-status">
                    <SchoolOutlinedIcon />
                    <span className="pl-3">
                      <strong>Education</strong>
                    </span>
                  </div>
                </div>
              </Row>
              <div className="user-connetions position-relative">
                <p className="pt-2">
                  <strong className="text-muted">
                    <Link>500+ connections</Link>
                  </strong>
                </p>
                <div className="d-flex">
                  <div className="btn-one">
                    <Button onClick={() => setButtonOne(!buttonOne)}>
                      Open to
                    </Button>{" "}
                  </div>
                  {buttonOne === true ? (
                    <div className="btn-one-drowpdown">
                      <div className="text-muted">
                        <div className="">
                          <a href="#Hiring">
                            <p className="mb-1">
                              <strong>Hiring</strong>
                            </p>
                            <span className="text-muted">
                              Share that you’re hiring and attract qualified
                              candidates
                            </span>
                          </a>
                        </div>
                        <div className="mb-4 mt-2">
                          <a href="#Providing-services">
                            <p className="mb-1">
                              <strong>Providing services</strong>
                            </p>
                            <span className="text-muted">
                              Showcase services you offer so new clients can
                              discover you
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  <div className="mx-2 btn-two position-relative">
                    <Button onClick={() => setButtonTwo(!buttonTwo)}>
                      Add section
                    </Button>{" "}
                  </div>
                  {buttonTwo === true ? (
                    <div className="btn-two-drowpdown">
                      <MultiMenus menus={menus} />
                    </div>
                  ) : null}

                  <div className="btn-three">
                    <Button onClick={() => setButtonThree(!buttonThree)}>
                      More
                    </Button>{" "}
                  </div>
                  {buttonThree === true ? (
                    <div className="btn-three-drowpdown">
                      <div className="text-muted">
                        <p>Share profile in a message</p>
                        <p>Save to PDF</p>
                        <p>Build a resume</p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div></div>
          </div>
        )}
      </Jumbotron>
    </>
  );
};

export default Headerinfo;
