import {
  Button,
  Col,
  Container,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addHomePagePost,
  editImage,
  saveHomePost,
} from "../redux/actions/actions";
import { useEffect, useState } from "react";

const HomeMidTop = () => {
  const [postContent, setPostContent] = useState({ text: "" });
  const [selectedFile, setSelectedFile] = useState(null);
  const [showModalPost, setShowModalPost] = useState(false);
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user.content);
  const profileImage = useSelector((state) => state.user.content.image);

  const token = useSelector((state) => state.token.token);

  const formData = new FormData();
  formData.append("post", selectedFile);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHomePagePost(token, postContent, formData));
    console.log(postContent);
    setPostContent({ text: "" });
    setShowModalPost(false);
    setTimeout(() => {
      dispatch(saveHomePost(token));
    }, 1500);
  };

  return (
    <Row
      className="flex-column p-2 bg-white mt-3 border border-muted rounded-2 gy-3"
      style={{ height: "150px" }}
    >
      <Col className="d-flex align-items-center">
        {profileImage ? (
          <div className="rounded-circle overflow-auto ">
            <img src={profileImage} alt="" style={{ height: "50px" }} />
          </div>
        ) : (
          <i className="bi bi-person fs-4 "></i>
        )}

        <Form className="ms-2 flex-grow-1 " onSubmit={(e) => handleSubmit(e)}>
          <Form.Control
            placeholder="Avvia Un Post"
            onClick={() => setShowModalPost(true)}
          ></Form.Control>
        </Form>
      </Col>

      <Col>
        <Container>
          <div className="d-flex fs-6 justify-content-between  ">
            <div className="d-flex addImg rounded-1 p-1 ">
              <i className="bi bi-image text-secondary "></i>
              <span className="ms-2">Contenuti multimediali</span>
            </div>
            <div className="d-flex addImg rounded-1 p-1 ">
              <i className="bi bi-calendar3 text-warning"></i>
              <span className="ms-2">Evento</span>
            </div>
            <div className="d-flex addImg rounded-1 p-1 ">
              <i className="bi bi-layout-text-window text-danger"></i>
              <span className="ms-2">Scrivi un articolo</span>
            </div>
          </div>
        </Container>
      </Col>

      <Modal
        show={showModalPost}
        onHide={() => setShowModalPost(false)}
        className="modal-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className="d-flex align-items-center">
            <div>
              <img
                src={profileImage}
                alt=""
                style={{ height: "50px" }}
                className="rounded-circle me-3 "
              />
            </div>
            <div>
              <p className="mb-0">
                {userData.name} {userData.surname}
              </p>
              <p className="fw-light mb-0" style={{ fontSize: "13px" }}>
                Pubblica: Chiunque
              </p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={9}
              className="txtArea"
              placeholder="Di cosa vorresti parlare?"
              value={postContent.text}
              onChange={(e) =>
                setPostContent({ ...postContent, text: e.target.value })
              }
            />
          </Form.Group>
          <Container>
            <div className="d-flex">
              <div>
                <label htmlFor="upload-photo" className="addImgModal ">
                  <i className="bi bi-image  fs-5 text-muted "></i>
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  id="upload-photo"
                  className="d-none"
                />
              </div>
              <div className="ms-4">
                <span className="addImgModal">
                  <i className="bi bi-calendar3 fs-5  text-muted "></i>
                </span>
              </div>
              <div className="ms-4">
                <span className="addImgModal">
                  <i className="bi bi-patch-minus fs-5  text-muted"></i>
                </span>
              </div>
              <div className="ms-4">
                <span className="addImgModal">
                  <i className="bi bi-three-dots fs-5  text-muted"></i>
                </span>
              </div>
            </div>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={(e) => handleSubmit(e)}
            variant={postContent.text.trim() === "" ? "disabled" : "secondary"}
            className="rounded-5"
            disabled={postContent.text.trim() === ""}
          >
            Pubblica
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};

export default HomeMidTop;
