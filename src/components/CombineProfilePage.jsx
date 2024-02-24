import Sidebar from "./sidebar";
import ProfileTop from "./ProfileTop";
import { Container, Row } from "react-bootstrap";
import MyFooter from "./MyFooter";

const CombineProfilePage = () => {
  return (
    <>
      <Container>
        <Row>
          <ProfileTop />
          <Sidebar />
        </Row>
        <MyFooter />
      </Container>
    </>
  );
};
export default CombineProfilePage;
