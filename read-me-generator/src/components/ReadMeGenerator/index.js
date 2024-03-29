import React from "react";
import {
  Form,
  Col,
  Row,
  FloatingLabel,
  Button,
  FormLabel,
  Card,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//Input form DOM for the read me generator 
function ReadMeGenerator() {
  const navigate = useNavigate();
  return (
    <div>
      <Form>
        <Row>
          <Col>
            {/* Forms for user input  */}
            <FormLabel className="label">
              Please Insert The Name Of The Project/Application
            </FormLabel>
            {/* Form control for identification of form as well as styling */}
            <Form.Control
              className="mar2"
              placeholder="Project Name"
              style={{ width: "98%" }}
              id="1"
            ></Form.Control>
            <FormLabel className="label">
              Please Insert The Version Number Of The Project
            </FormLabel>
            {/* Form control for identification of form as well as styling */}
            <Form.Control
              className="mar2"
              placeholder="Version #"
              style={{ width: "98%" }}
              id="12"
            ></Form.Control>
            <FormLabel className="label">
              Please Insert The Name Of The Creator
            </FormLabel>
            <Form.Control
              className="mar2"
              placeholder="Creator"
              style={{ width: "98%" }}
              id="2"
            />
            <FormLabel className="label">
              Please Insert The Name Of Any Contributors
            </FormLabel>
            <Form.Control
              className="mar2"
              placeholder="Contributors"
              style={{ width: "98%" }}
              id="3"
            />
            <FormLabel className="label">
              Please Insert A Short Description Of The Application
            </FormLabel>
            <FloatingLabel className="mar2" label="Description">
              <Form.Control as="textarea" style={{ height: "100px" }} id="4" />
            </FloatingLabel>
            <FormLabel className="label">
              Please Insert Any Installation Requirements Or Instructions
            </FormLabel>
            <FloatingLabel
              label="Installation Requirements Or Instructions"
              className="mar2"
            >
              <Form.Control as="textarea" style={{ height: "100px" }} id="5" />
            </FloatingLabel>
          </Col>
          <Col>
            <FormLabel className="label">
              Please Insert The Paths To Your Image Within Github
            </FormLabel>
            <FloatingLabel
              label="Image Path ex ../src/images/image.jpg"
              className="mar2"
            >
              <Form.Control as="textarea" style={{ height: "100px" }} id="6" />
            </FloatingLabel>

            <FormLabel className="label">
              Please Insert The Technologies Utilized Seperated By A Comma
            </FormLabel>
            <Form.Control
              className="mar2"
              placeholder="Technologies"
              style={{ width: "98%" }}
              id="13"
            ></Form.Control>

            <FormLabel className="label">
              Please Provide A Link To The Active Application/Website
            </FormLabel>
            <Form.Control
              className="mar2"
              placeholder="Active Link"
              style={{ width: "98%" }}
              id="7"
            ></Form.Control>
            <FormLabel className="label">
              Please Provide Repository Link
            </FormLabel>
            <Form.Control
              className="mar2"
              placeholder="Repository Link"
              style={{ width: "98%" }}
              id="8"
            />
            <FormLabel className="label">
              Please Provide Contact Information
            </FormLabel>
            <Form.Control
              className="mar2"
              placeholder="Contact Email"
              style={{ width: "98%" }}
              id="9"
            />
            <FormLabel className="label">
              Please Provide Contact Number
            </FormLabel>
            <Form.Control
              className="mar2"
              placeholder="Contact #"
              style={{ width: "98%" }}
              id="10"
            />
            {/* This functions as the license drop down section for badge as well as instructions towards link*/}
            <FormLabel className="label">
              Please Choose From The Listed Licenses For Your Project
            </FormLabel>
            <Form.Select
              className="mar2"
              aria-label="License"
              style={{ width: "98%" }}
              id="11"
            >
              <option>Please Select a License for this Project</option>
              <option value="MIT">MIT</option>
              <option value="IBM">IBM</option>
              <option value="ISC">ISC</option>
              <option value="Mozilla">Mozilla</option>
              <option value="Apache 2.0">Apache 2.0</option>
              <option value="Boost">Boost</option>
              <option value="BSD">BSD</option>
              <option value="None">None</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>
      <Card style={{ margin: "5% 45% 5% 45%" }}>
        <Button variant="primary" onClick={() => navigate("/handleSubmit")}>
          Submit
        </Button>
      </Card>
    </div>
  );
}

export default ReadMeGenerator;
