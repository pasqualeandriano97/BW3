import { Col, Container, Row } from "react-bootstrap";
import HomeMidTop from "./HomeMidTop";
import SinglePost from "./SinglePost";
import { useDispatch, useSelector } from "react-redux";
import { saveHomePost } from "../redux/actions/actions";

const HomeMid = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  return (
    <div className="col-lg-6 ">
      <Row className="flex-column">
        <Col>
          <HomeMidTop />
        </Col>
        <Col className="d-flex align-items-center ">
          <div className="flex-grow-1 me-2 ">
            <hr />
          </div>
          <div>
            <span className="d-flex  ">
              Seleziona la visualizzazione del feed:
              <div className="addImg d-flex rounded-1 ">
                <p
                  className="mb-0 fw-semibold ms-2 "
                  onClick={() => dispatch(saveHomePost(token))}
                  style={{ cursor: "pointer" }}
                >
                  Più rilevanti per primi
                </p>
                <i className="bi bi-caret-down-fill"></i>
              </div>
            </span>
          </div>
        </Col>
        <Col className="px-0">
          <SinglePost />
        </Col>
      </Row>
    </div>
  );
};

export default HomeMid;
