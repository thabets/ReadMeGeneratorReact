import React from "react";
import {
  Form,
  Col,
  Row,
  FloatingLabel,
  Button,
  FormLabel,
} from "react-bootstrap";

import getVal from "../Helpers/index"

function ReadMeGenerator() {
  return (
    <div>
      <Form>
        <Row>
          <Col>
            <FormLabel className="label">
              Please Insert The Name Of The Project/Application
            </FormLabel>

            <Form.Control
              className="mar2"
              placeholder="Project Name"
              style={{ width: "98%" }}
            ></Form.Control>

            <FormLabel className="label">
              Please Insert The Name Of The Creator
            </FormLabel>

            <Form.Control
              className="mar2"
              placeholder="Creator"
              style={{ width: "98%" }}
            />

            <FormLabel className="label">
              Please Insert The Name Of Any Contributors
            </FormLabel>

            <Form.Control
              className="mar2"
              placeholder="Contributors"
              style={{ width: "98%" }}
            />

            <FormLabel className="label">
              Please Insert A Short Description Of The Application
            </FormLabel>

            <FloatingLabel
              className="mar2"
              controlId="floatingTextarea"
              label="Description"
            >
              <Form.Control as="textarea" style={{ height: "100px" }} />
            </FloatingLabel>

            <FormLabel className="label">
              Please Insert Any Installation Requirements Or Instructions
            </FormLabel>

            <FloatingLabel
              controlId="floatingTextarea2"
              label="Installation Requirements Or Instructions"
              className="mar2"
            >
              <Form.Control as="textarea" style={{ height: "100px" }} />
            </FloatingLabel>
          </Col>
          <Col>
            <FormLabel className="label">
              Please Insert The Paths To Your Image Within Github
            </FormLabel>

            <FloatingLabel
              controlId="floatingTextarea3"
              label="Image Path ex ../src/images/image.jpg"
              className="mar2"
            >
              <Form.Control as="textarea" style={{ height: "100px" }} />
            </FloatingLabel>

            <FormLabel className="label">
              Please Provide A Link To The Active Application/Website
            </FormLabel>
            <Form.Control
              className="mar2"
              placeholder="Active Link"
              style={{ width: "98%" }}
            ></Form.Control>

            <FormLabel className="label">
              Please Provide Repository Link
            </FormLabel>
            <Form.Control
              className="mar2"
              placeholder="Repository Link"
              style={{ width: "98%" }}
            />

            <FormLabel className="label">
              Please Provide Contact Information
            </FormLabel>
            <Form.Control
              className="mar2"
              placeholder="Contact Email"
              style={{ width: "98%" }}
            />

            <FormLabel className="label">
              Please Provide Contact Number
            </FormLabel>
            <Form.Control
              className="mar2"
              placeholder="Contact #"
              style={{ width: "98%" }}
            />

            <FormLabel className="label">
              Please Choose From The Listed Licenses For Your Project
            </FormLabel>
            <Form.Select
              className="mar2"
              aria-label="License"
              style={{ width: "98%" }}
            >
              <option>Please Select a License for this Project</option>
              <option value="1">MIT</option>
              <option value="2">IBM</option>
              <option value="3">ISC</option>
              <option value="4">Mozilla</option>
              <option value="5">Apache 2.0</option>
              <option value="6">Boost</option>
              <option value="7">BSD</option>
              <option value="8">None</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>
      <Button
        variant="dark"
        style={{ margin: " 30px 10px 10px 10px" }}
        onClick={getVal}
      >
        Submit
      </Button>
    </div>
  );
}

export default ReadMeGenerator;
