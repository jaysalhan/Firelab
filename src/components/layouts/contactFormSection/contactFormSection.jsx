import { Container, Image } from "react-bootstrap";
import contactImage from "../../../assets/images/contact-image.png";
import ContactForm from "../contactForm/contactForm";
import "./contactFormSection.css";

function ContactFormSection() {
  return (
    <Container className="contact_form_section mt-5">
      <Image
        src={contactImage}
        alt="contact-image"
        className="contact_form_image"
        width={274}
        height={513}
      />
      <ContactForm className="contact_form_container" />
    </Container>
  );
}

export default ContactFormSection;
