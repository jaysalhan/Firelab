import { Container, Image } from "react-bootstrap";
import "./reportsProductsCards.css";

function ReportsProductsCards(props) {
  return (
    <Container
      fluid
      align="center"
      className={`cards-container h-100 ${
        props.fullWidthImage ? "p-0 pb-5" : ""
      }`}
    >
      <Image
        src={props.image}
        alt={props.title || props.text.substring(0, 10)}
        fluid
        className={`products-image ${props.fullWidthImage ? "cover" : ""}`}
        width={props.width}
        height={props.height}
      />
      <div className={`${props.fullWidthImage ? "p-3" : ""}`}>
        <p className={`products-title `}>{props.title}</p>
        <p>{props.text}</p>
      </div>
    </Container>
  );
}

export default ReportsProductsCards;
