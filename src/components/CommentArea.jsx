import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  deleteComment,
  fetchCommentPosts,
  modifyComment,
} from "../redux/actions/actions";
import PropTypes from "prop-types";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import Stars from "./Stars";

const CommentArea = ({ postId }) => {
  const commentData = useSelector((state) => state.comment.content);
  const token = useSelector((state) => state.token.token);
  const [showModalComment, setShowModalComment] = useState(false);
  const [showModiyComment, setShowModifyComment] = useState(false);
  const [newComment, setNewComment] = useState({
    comment: "",
    rate: "1",
    elementId: postId,
  });
  const dispatch = useDispatch();

  const handleComment = (e, postId) => {
    e.preventDefault();
    dispatch(addComment(newComment, token));
    setShowModalComment(false);
    dispatch(fetchCommentPosts(postId));
  };

  const handleDeleteComment = (commentID) => {
    dispatch(deleteComment(commentID));
  };

  const handleModifyComment = (comment) => {
    setShowModifyComment(true);
    setNewComment({
      ...comment,
    });
  };

  const handleSaveModifiedComment = () => {
    dispatch(modifyComment(newComment._id, newComment));
    setShowModifyComment(false);
    dispatch(fetchCommentPosts(postId));
  };

  return (
    <Container>
      <Row className="flex-column gy-2 m-2 ">
        {commentData.map((comment) => (
          <Col key={comment._id} className="bg-light p-2 rounded-1">
            <div>
              <div className="d-flex justify-content-between ">
                <div>
                  <span className="fw-semibold me-2">{comment.author}</span>
                  <span style={{ fontSize: "12px" }}>
                    {comment.createdAt.split("T")[0]}
                  </span>
                </div>
                <div>
                  <i
                    className="bi bi-three-dots me-2 "
                    onClick={() => handleModifyComment(comment)}
                  ></i>
                  <i
                    className="bi bi-x-lg"
                    onClick={() => handleDeleteComment(comment._id)}
                  ></i>
                </div>
              </div>

              <div>
                <Stars Stars={comment.rate} />
              </div>
              <span>&rdquo;{comment.comment}&rdquo;</span>
            </div>
          </Col>
        ))}
        <div className="px-0">
          <Form>
            <Form.Control
              placeholder="Aggiungi un Commento"
              onClick={() => setShowModalComment(true)}
            ></Form.Control>
          </Form>
        </div>
        {showModalComment && (
          <Modal
            show={showModalComment}
            onHide={() => setShowModalComment(false)}
          >
            <Form className="mt-4 " onSubmit={handleComment}>
              <Modal.Header closeButton>
                <Modal.Title>Aggiungi un Commento</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Valuta il Post</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    id="rate"
                    required
                    onChange={(e) => {
                      setNewComment({
                        ...newComment,
                        rate: e.target.value,
                        postId: postId,
                      });
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Scrivici la tua</Form.Label>
                  <Form.Control
                    value={newComment.comment}
                    required
                    onChange={(e) => {
                      setNewComment({
                        ...newComment,
                        comment: e.target.value,
                        elementId: postId,
                      });
                    }}
                    id="comment"
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  disabled={newComment.comment ? false : true}
                  variant="secondary"
                  type="submit"
                >
                  Invia
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        )}
        <Modal
          show={showModiyComment}
          onHide={() => setShowModifyComment(false)}
        >
          <Form className="mt-4 " onSubmit={handleSaveModifiedComment}>
            <Modal.Header closeButton>
              <Modal.Title>Modifica il commento</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3">
                <Form.Label>Cambia la valutazione</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  id="rate"
                  required
                  value={newComment.rate}
                  onChange={(e) =>
                    setNewComment({
                      ...newComment,
                      rate: e.target.value,
                    })
                  }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Aggiorna il testo</Form.Label>
                <Form.Control
                  value={newComment.comment}
                  required
                  onChange={(e) =>
                    setNewComment({
                      ...newComment,
                      comment: e.target.value,
                    })
                  }
                  id="comment"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button
                disabled={!newComment.comment}
                variant="secondary"
                type="submit"
              >
                Modifica Commento
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Row>
    </Container>
  );
};

CommentArea.propTypes = {
  postId: PropTypes.number.isRequired,
};

export default CommentArea;
