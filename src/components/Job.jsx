import JobPageCenterComponent from "./JobPageCenter";
import { Container, Row, Col } from "react-bootstrap";
import HomeDxFooter from "./HomeDxFooter";
import JobSidebarSx from "./JobSidebarSx";

function Job() {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <JobSidebarSx />
        <Col className="col-lg-6 col-md-10 col-s-12">
          <JobPageCenterComponent />
        </Col>
        <Col lg={2} className="d-none d-md-block">
          <HomeDxFooter />
        </Col>
      </Row>
    </Container>
  );
}

export default Job;
