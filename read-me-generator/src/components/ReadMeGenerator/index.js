import React from "react";
import {
  Form,
  Col,
  Row,
  FloatingLabel,
  Button,
  FormLabel,
} from "react-bootstrap";

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
            ></Form.Control>

            <FormLabel className="label">
              Please Insert The Name Of The Creator
            </FormLabel>

            <Form.Control className="mar2" placeholder="Creator" />

            <FormLabel className="label">
              Please Insert The Name Of Any Contributors
            </FormLabel>

            <Form.Control className="mar2" placeholder="Contributors" />

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
            <FloatingLabel controlId="floatingTextarea" label="Image Path">
              <Form.Control as="textarea" style={{ height: "100px" }} />
            </FloatingLabel>
            <Form.Control placeholder="Active Link" />
            <Form.Control placeholder="Repository Link" />
            <Form.Control placeholder="Contact Email" />
            <Form.Control placeholder="Contact #" />
            <Form.Select aria-label="License">
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
      <Button variant="dark" style={{margin:" 30px 10px 10px 10px"}}>
        Submit
      </Button>
    </div>
  );
}

export default ReadMeGenerator;
