import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { newUserPost } from "../redux/actions/actions";
import { Modal } from "react-bootstrap";

const MyForm = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token) || undefined;
  const id = useSelector((state) => state.user.content._id) || undefined;

  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pass the FormData object to the Redux action
    dispatch(newUserPost(id, token, formData));
    console.log("Submitted");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="role">
        <Form.Label className="my-2">Ruolo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter role"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="company">
        <Form.Label className="my-2">Compagnia</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter company"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="startDate">
        <Form.Label className="my-2">Data d&apos;inizio</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter start date"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="endDate">
        <Form.Label className="my-2">
          Data di fine &#40;opzionale&#41;
        </Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter end date"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label className="my-2">Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter description"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="area">
        <Form.Label className="my-2">Area</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter area"
          onChange={handleChange}
        />
      </Form.Group>
      <div className="d-flex justify-content-end border-top mt-2 ">
        <Button variant="secondary" type="submit" className="text-end mt-2">
          Crea
        </Button>
      </div>
    </Form>
  );
};

export default MyForm;
