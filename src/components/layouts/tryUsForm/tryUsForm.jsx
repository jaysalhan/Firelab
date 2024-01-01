import {
  Form,
  Row,
  Col,
  FormLabel,
  FormControl,
  Button,
  FormSelect,
} from "react-bootstrap";
import "./tryUsForm.css";

function TryUsForm() {
  return (
    <div className="tryus_form_container">
      <Form>
        <Row>
          <Col>
            <FormLabel>First name</FormLabel>
            <FormControl type="text"></FormControl>
          </Col>
          <Col>
            <FormLabel>Last name</FormLabel>
            <FormControl type="text"></FormControl>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormLabel>Email</FormLabel>
            <FormControl type="email"></FormControl>
          </Col>
          <Col>
            <FormLabel>Company name</FormLabel>
            <FormControl type="text"></FormControl>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormLabel>Phone number</FormLabel>
            <FormControl type="text"></FormControl>
          </Col>
          <Col>
            <FormLabel>How did you find us?*</FormLabel>
            <FormSelect>
              <option disabled>Please Select</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </FormSelect>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormLabel>Country/Region</FormLabel>
            <FormControl type="text"></FormControl>
          </Col>
        </Row>
      </Form>
      <Button className="submit_button">Submit</Button>
    </div>
  );
}

export default TryUsForm;
