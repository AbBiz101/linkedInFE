import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Edu_list from "./Edu_list";
import AddIcon from "@mui/icons-material/Add";
import { Modal, Button } from "react-bootstrap";
import { Image, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import UpdateExperience from "./UpdateExperience";
import { format, parseISO } from "date-fns";

export default function Experience({ authorized }) {
  const params = useParams();

  const [experiences, setExperiences] = useState([]);

  const [showUpdateModel, setShowUpdateModel] = useState(false);

  // this is for the update model setting one experience on click as an object
  const [exp, setExp] = useState(null);

  const [experienceData, setExperienceData] = useState({
    role: "",
    company: "",
    startDate: new Date(),
    endDate: new Date(),
    description: "",
    area: "",
  });

  const [workModel, setWorkModel] = useState(false);

  const [educationModel, setEducationModel] = useState(false);

  const [dateSelected, setDateSelected] = useState(null);

  const [enddateSelected, setEnddateSelected] = useState(null);

  const [style, setStyle] = useState({ display: "none" });

  //   Getting the exisiting user experience
  const fetchData = async () => {
    const id = params.userId === "me" ? authorized._id : params.userId;
    try {
      const response = await fetch(
        ` https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
        {
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();

        setExperiences(data);

        console.log(`exp==================>`);
        // console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // getting image
  const [image, setImage] = useState(null);

  //   Getting the exisiting user experience
  const postExperience = async () => {
    try {
      let responce = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${authorized._id}/experiences`,
        {
          method: "POST",
          body: JSON.stringify(experienceData),
          headers: {
            "Content-Type": "application/json",
            Authorization: process.env.REACT_APP_API_KEY,
          },
        }
      );

      if (responce.ok) {
        let data = await responce.json();
        console.log(responce);
        try {
          let formdata = new FormData();
          formdata.append("experience", image);

          const response = await fetch(
            `https://striveschool-api.herokuapp.com/api/profile/${authorized._id}/experiences/${data._id}/picture`,
            {
              method: "POST",
              body: formdata,
              headers: {
                Authorization: process.env.REACT_APP_API_KEY,
              },
            }
          );
          console.log(`before the imagepost`);
          if (response.ok) {
            console.log(`inside the if after the image post`);
          }
          console.log(`before closing the model`);
          setWorkModel(false);
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, [params.userId]);

  return (
    <div className="experience">
      {/* UPDATE EXPERIENCE MODEL */}
      {exp && (
        <UpdateExperience
          showUpdateModel={showUpdateModel}
          setShowUpdateModel={setShowUpdateModel}
          exp={exp}
          setExp={setExp}
          setImage={setImage}
          authorized={authorized}
          experiences={experiences}
          fetchData={fetchData}
        />
      )}
      {/* END UPDATE MODEL */}

      {/* ------Experience_model---- workModel---- ADD> */}
      <Modal size="lg" show={workModel} onHide={() => setWorkModel(false)}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add experience
          </Modal.Title>
        </Modal.Header>
        <Modal.Body class="from__body">
          <div className="input_form">
            <div className="input_title">
              <label>Title*</label>
              <Form.Control
                value={experienceData.role}
                onChange={(e) =>
                  setExperienceData({ ...experienceData, role: e.target.value })
                }
              />
            </div>

            <div className="input_comp_name">
              <label>Employment type</label>
              <Form.Control as="select">
                <option>Please select</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Self-employed</option>
                <option>Freelance</option>
                <option>Contract</option>
                <option>Internship</option>
                <option>Apprenticeship</option>
              </Form.Control>
              <label>Country-specific employment types</label>
            </div>

            <div className="input_city">
              <label>Location</label>
              <Form.Control
                type="text"
                placeholder="Ex: London, United Kingdom"
                valaue={experienceData.area}
                onChange={(e) =>
                  setExperienceData({ ...experienceData, area: e.target.value })
                }
              />
            </div>

            <h5>learn more</h5>
            <div className="input_Company_name ">
              <label>Company name </label>
              <Form.Control
                placeholder="Ex: Microsoft"
                value={experienceData.company}
                onChange={(e) =>
                  setExperienceData({
                    ...experienceData,
                    company: e.target.value,
                  })
                }
              />
            </div>

            <Form.Check
              type="checkbox"
              label="I am currently working in this role"
            />

            <div className="input_date">
              <div className="start_date">
                <div>
                  <label>Start date*</label>
                  <Form>
                    <DatePicker
                      selected={experienceData.startDate}
                      value={experienceData.startDate}
                      onChange={(date) =>
                        setExperienceData({
                          ...experienceData,
                          startDate: date,
                        })
                      }
                      isClearable
                      showYearDropdown
                      scrollableMonthYearDropdown
                    />
                  </Form>
                </div>
                <div>
                  <label>End date*</label>
                  <Form>
                    <DatePicker
                      selected={experienceData.endDate}
                      value={experienceData.endDate}
                      onChange={(date) =>
                        setExperienceData({
                          ...experienceData,
                          endDate: date,
                        })
                      }
                      isClearable
                      showYearDropdown
                      scrollableMonthYearDropdown
                    />
                  </Form>
                </div>
              </div>
            </div>

            <div className="input_headline">
              <label>Headline</label>
              <Form.Control type="text" placeholder="Ex: Web Developer" />
            </div>

            <div className="input_industry">
              <label>Industry*</label>
              <Form.Control
                type="text"
                placeholder="Ex: Architecture & Planning"
              />
              <label>
                LinkedIn uses industry information to provide more relevant
                recommendations
              </label>
            </div>

            <div className="input_description">
              <label>Description</label>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  class="input_description_text"
                  as="textarea"
                  rows={3}
                  value={experienceData.description}
                  onChange={(e) =>
                    setExperienceData({
                      ...experienceData,
                      description: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </div>

            <div className="input_last">
              <h5>Media</h5>
              <h6>
                Add or link to external documents, photos, sites, videos, and
                presentations.
              </h6>
              <h6>Learn more</h6>
              <button>
                <AddIcon />
                <label class="">
                  <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  <p className="mb-0 mt-2 mx-2"> Add Photo</p>
                </label>
              </button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="footer_button">
          <Button onClick={() => postExperience()}>
            <h5> Save </h5>
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ------Education_model--------> */}
      <Modal
        size="lg"
        show={educationModel}
        onHide={() => setEducationModel(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add education
          </Modal.Title>
        </Modal.Header>
        <Modal.Body class="from__body">
          <div className="input_form">
            <div className="input_title">
              <label>School*</label>
              <Form.Control type="text" placeholder="Ex: Strive School" />
            </div>

            <div className="input_comp_name">
              <label>Degree</label>
              <Form.Control type="text" placeholder="Ex: Bachelor's" />
            </div>

            <div className="input_city">
              <label>Field of study </label>
              <Form.Control type="text" placeholder="Ex: Business" />
            </div>
            <div className="input_date">
              <div className="start_date">
                <div>
                  <label>Start date*</label>
                  <Form>
                    <DatePicker
                      value={dateSelected}
                      selected={dateSelected}
                      onChange={(date) => setDateSelected(date)}
                      isClearable
                      showYearDropdown
                      scrollableMonthYearDropdown
                    />
                  </Form>
                </div>
                <div>
                  <label>End date*</label>
                  <Form>
                    <DatePicker
                      value={enddateSelected}
                      selected={enddateSelected}
                      onChange={(date) => setEnddateSelected(date)}
                      isClearable
                      showYearDropdown
                      scrollableMonthYearDropdown
                    />
                  </Form>
                </div>
              </div>
            </div>

            <div className="input_headline">
              <label>Grade</label>
              <Form.Control type="text" placeholder="Ex: 3.5" />
            </div>

            <div className="input_description">
              <label>Activities and societies</label>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  class="input_description_text"
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
            </div>

            <div className="input_description">
              <label>Description</label>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  class="input_description_text"
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
            </div>

            <div className="input_last">
              <h5>Media</h5>
              <h6>
                Add or link to external documents, photos, sites, videos, and
                presentations.
              </h6>
              <h6>Learn more</h6>
              <br />
              <button>
                <h5>
                  <AddIcon />
                  Add Meddia
                </h5>
              </button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="footer_button">
          <Button>
            <h5> Save </h5>
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="adding_exp">
        <h5 className="experience_title">Experience</h5>
        <div className="experience-button">
          <button onClick={() => setWorkModel(true)}>
            <AddIcon fontSize="large" />
          </button>
        </div>
      </div>
      {experiences.map((experience) => (
        <div
          onMouseLeave={(e) => {
            setStyle({ display: "none" });
          }}
          onMouseOver={(e) => {
            setStyle({ display: "block", color: "#a1a09e" });
          }}
          className="experience_biglist"
        >
          <div className="experience_list">
            <Image
              className="img-fluid wiges_onlibottom_listimg"
              src={experience.image}
            />

            <div className="experience_list_txt">
              <h5>{experience.role}</h5>
              <p className="text-dark">{experience.company}</p>
              <p className="text-muted">
                {format(parseISO(experience.startDate), "MMM yyyy")} -{" "}
                {format(parseISO(experience.endDate), "MMM yyyy")}
              </p>
              <p>
                <small>{experience.description}</small>
              </p>
            </div>
            <hr />
          </div>
          <div
            className="btns_vertical_edit"
            // onClick={() => setExp(experience)}
          >
            <EditOutlinedIcon
              onClick={() => {
                setShowUpdateModel(true);
                setExp(experience);
              }}
              fontSize="large"
              style={style}
            />
            {/* <ReorderIcon
              onClick={() => setWorkModel(true)}
              fontSize="large"
              style={style}
            /> */}
          </div>
        </div>
      ))}
      <div className="edu_list">
        <div className="adding_edu">
          <h5 className="edu_list_title">Education</h5>
          <div className="education-button">
            <AddIcon onClick={() => setEducationModel(true)} fontSize="large" />
          </div>
        </div>
        <Edu_list />
      </div>
    </div>
  );
}
