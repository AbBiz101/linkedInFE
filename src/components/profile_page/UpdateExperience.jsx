import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Modal, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parseISO } from "date-fns";

const UpdateExperience = ({
  showUpdateModel,
  setShowUpdateModel,
  exp,
  setExp,
  setImage,
  authorized,
  experiences,
  fetchData,
}) => {
  const submitUpdateForm = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${authorized._id}/experiences/${exp._id}`,
        {
          method: "PUT",
          body: JSON.stringify(exp),
          headers: {
            "Content-Type": "application/json",
            Authorization: process.env.REACT_APP_API_KEY,
          },
        }
      );

      if (response.ok) {
        fetchData();
        setShowUpdateModel(false);
        console.log(`exp updated successfully`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEx = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${authorized._id}/experiences/${exp._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        }
      );
      if (response.ok) {
        fetchData();
        setShowUpdateModel(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      size="lg"
      show={showUpdateModel}
      onHide={() => setShowUpdateModel(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Experience
        </Modal.Title>
      </Modal.Header>
      <Modal.Body class="from__body">
        <div className="input_form">
          <div className="input_title">
            <label>Title*</label>
            <Form.Control
              value={exp.role}
              onChange={(e) => {
                setExp({ ...exp, role: e.target.value });
                // console.log(exp.role);
              }}
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
              value={exp.area}
              onChange={(e) => setExp({ ...exp, area: e.target.value })}
            />
          </div>

          <h5>learn more</h5>
          <div className="input_Company_name ">
            <label>Company name </label>
            <Form.Control
              placeholder="Ex: Microsoft"
              value={exp.company}
              onChange={(e) =>
                setExp({
                  ...exp,
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
                    value={format(parseISO(exp.startDate), "MMMM do yyyy")}
                    onChange={(date) =>
                      setExp({
                        ...exp,
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
                    value={format(parseISO(exp.endDate), "MMMM do yyyy")}
                    onChange={(date) =>
                      setExp({
                        ...exp,
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
                value={exp.description}
                onChange={(e) =>
                  setExp({
                    ...exp,
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
              <h5>
                <AddIcon />
                <label class="">
                  <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  <p className="mb-0 mt-2 mx-2"> Add Photo</p>
                </label>
              </h5>
            </button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="footer_button">
        <Button onClick={() => deleteEx()}>
          <h5> Delete</h5>
        </Button>

        <Button onClick={() => submitUpdateForm()}>
          <h5> Save </h5>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateExperience;
