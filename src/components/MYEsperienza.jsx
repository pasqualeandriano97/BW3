import "bootstrap/dist/css/bootstrap.min.css";
import "./style/MyAttivita.css";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Modal,
  Row,
  Col,
  Image,
  Container,
} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  deleteUserPost,
  newUserPost,
  saveHomePost,
} from "../redux/actions/actions";

import { addUserPost } from "../redux/actions/actions";
import MyForm from "./MyForm";
import pictureExperience from "../assets/esperienzepx.avif";

const MYEsperienza = () => {
  const [showForm, setShowForm] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const reduxPosts = useSelector((state) => state.post.content);
  const token = useSelector((state) => state.token.token) || undefined;
  const id = useSelector((state) => state.user.content._id) || undefined;
  const dispatch = useDispatch();

  useEffect(() => {
    if (token !== undefined && id !== undefined) {
      console.log("id", id);
      dispatch(addUserPost(id, token));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, id, dispatch]);

  if (reduxPosts.length !== 0) {
    console.log("Oggetto contenuti della fetch", reduxPosts);
  }

  return (
    <Card className="mb-2 p-0">
      <CardBody className="p-0 pt-3">
        <div className="d-flex justify-content-between ms-4  me-4">
          <div>
            <h3 className="mb-0 fw-bold">Esperienze</h3>
          </div>
          <Modal show={showForm} onHide={() => setShowForm(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Crea un post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <MyForm />
            </Modal.Body>
          </Modal>
          <div className="d-flex align-items-center ">
            <div
              className="me-3 fs-4 addPost "
              onClick={() => setShowForm(true)}
            >
              <i className="bi bi-plus-lg"></i>
            </div>

            <div>
              <i className="bi bi-pen "></i>
            </div>
          </div>
        </div>
        <Container>
          <Container>
            <Row>
              {reduxPosts.length > 0 ? (
                reduxPosts.map((post) => (
                  <Col
                    key={post._id}
                    className="col-12 mt-4 d-flex justify-content-between   align-items-center border-bottom pb-2"
                  >
                    <div className="d-flex ">
                      <Image
                        style={{ width: "130px", height: "130px" }}
                        src={pictureExperience}
                        className="rounded-circle  "
                      />
                      <div className=" ps-3">
                        <h5>{post.role}</h5>
                        <p className="mb-0 text-muted">{post.description}</p>
                        <p className="mb-0">
                          {post.startDate.split("T")[0]} -{" "}
                          {post.endDate !== null
                            ? post.endDate.split("T")[0]
                            : "Presente"}
                        </p>
                      </div>
                    </div>
                    <div>
                      <Button
                        onClick={() => {
                          dispatch(deleteUserPost(id, token, post._id));
                          dispatch(addUserPost(id, token));
                          console.log("post eliminato", post._id);
                        }}
                      >
                        elimina
                      </Button>
                    </div>
                  </Col>
                ))
              ) : (
                <Col className="ms-1 fs-6 mb-4 ">
                  Le tue esperieneze verrano mostrate qua
                </Col>
              )}
            </Row>
          </Container>
        </Container>
      </CardBody>
    </Card>
  );
};

export default MYEsperienza;
