import {
  FormGroup,
  Form,
  FormLabel,
  FormControl,
  Row,
  Col,
  Button,
  Image,
  Spinner,
  Toast,
} from "react-bootstrap";
import axios from "axios";
import "./contactForm.css";
import callIcon from "../../../assets/icons/call-icon.png";
import livechatIcon from "../../../assets/icons/live-chat.png";
import timeIcon from "../../../assets/icons/time-icon.png";
import CONSTANTS from "../../../constants/generals";
import { useState } from "react";

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, comments } = e.target.elements;
    const reqBody = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      comments: comments.value,
    };
    setLoading(true);
    axios
      .post(CONSTANTS.ARIES_CONTACT_US_ENDPOINT, reqBody)
      .then((res) => {
        const { message } = res.data;
        const color = "success";
        const small = "success";
        setResponse({ message, color, small });
      })
      .catch((err) => {
        const color = "danger";
        const small = "error";
        let message = "Something went wrong";
        if (err && err.data && err.data.error) {
          message = err.data.error;
        }
        setResponse({ message, color, small });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="form_container">
      <Toast
        show={response}
        delay={3000}
        autohide
        bg={response.color}
        onClose={() => setResponse(false)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
        }}
      >
        <Toast.Header>
          <strong className="me-auto">FireLab Response</strong>
          <small>{response.small}</small>
        </Toast.Header>
        <Toast.Body className="fw-bold">{response.message}</Toast.Body>
      </Toast>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <FormLabel>First name</FormLabel>
            <FormControl
              required
              type="text"
              placeholder="Enter here"
              name="firstName"
            ></FormControl>
          </Col>
          <Col>
            <FormLabel>Last name</FormLabel>
            <FormControl
              required
              type="text"
              placeholder="Enter here"
              name="lastName"
            ></FormControl>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormLabel>Email Address</FormLabel>
            <FormControl
              required
              type="email"
              placeholder="Enter here"
              name="email"
            ></FormControl>
          </Col>
          <Col>
            <FormLabel>Phone (optional)</FormLabel>
            <FormControl type="text" name="phone" placeholder=""></FormControl>
          </Col>
        </Row>
        <FormGroup className="comments_section">
          <FormLabel>Comments</FormLabel>
          <FormControl
            required
            as="textarea"
            rows={3}
            placeholder="Enter text"
            name="comments"
          ></FormControl>
        </FormGroup>
        <Button type="submit" className="submit_button" disabled={loading}>
          {loading ? <Spinner /> : "Submit"}
        </Button>
      </Form>
      <div className="other_contacts">
        <p className="other_contacts_text text-uppercase">
          Yuu can also contact us via following channels
        </p>
        <div className="contacts_container">
          {/*<div>
            <Image
              src={livechatIcon}
              alt="live-chat-icon"
              width={44}
              height={44}
            />
            <p>Live Chat</p>
          </div>]*/}
          <div>
            <Image src={callIcon} alt="call-icon" width={44} height={44} />
            <p>1-800-579-8710</p>
          </div>
          <div>
            <Image src={timeIcon} alt="time-iconC" width={44} height={44} />
            <p>Mon - Fri 9am - 5pm EST</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
