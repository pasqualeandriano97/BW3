import { Container, Row } from "react-bootstrap";
import SidebarHomeDx from "./SidebarHomeDx";
import SidebarHomeSx from "./SidebarHomeSx";
import HomeMid from "./HomeMid";

const Home = () => {
  return (
    <Container>
      <Row>
        <SidebarHomeSx />
        {/* sidebar sx col 2
        sez centrale col 7 */}
        <HomeMid />
        <SidebarHomeDx /> {/* col 3 */}
      </Row>
    </Container>
  );
};

export default Home;
