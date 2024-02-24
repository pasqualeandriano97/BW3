import { Col, Container } from "react-bootstrap";
import Dino from "./Dino";

const NotFound = () => {
  return (
    <Container>
      <Col
        xs={12}
        className="d-flex vh-100 justify-content-center flex-column align-items-center "
      >
        <div>
          <Dino />
        </div>
        <h1 className="fw-semibold">404 error - page not found</h1>
      </Col>
    </Container>
  );
};

export default NotFound;
