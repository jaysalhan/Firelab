import { Container, Image } from "react-bootstrap";
import trynowImage from "../../../assets/images/try-now.jpg";
import TryUsForm from "../tryUsForm/tryUsForm";
import "./tryUsFormSection.css";

function TryUsFormSection() {
  return (
    <Container className="tryus_form_section mt-5">
      <p>
        TO START YOUR <span>FREE 14 DAY TRIAL</span> FILL OUT THE INFORMATION
        BELOW
      </p>
      <div className="form_content_container">
        <Image src={trynowImage} alt="try-now" fluid className="tryus_image" />
        <TryUsForm />
      </div>
    </Container>
  );
}

export default TryUsFormSection;
