import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../redux/actions/actions";

function EditProfile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const token = useSelector((state) => state.token.token);
  const id = useSelector((state) => state.token.id);
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowModal(false);

    if (!selectedFile) {
      alert("Seleziona un file da caricare.");
      return;
    }

    const formData = new FormData();
    formData.append("profile", selectedFile);

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/picture`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        alert("File caricato con successo.");
        dispatch(addUserData(token));
      } else {
        alert("Si è verificato un errore durante il caricamento del file.");
      }
    } catch (error) {
      console.error("Si è verificato un errore:", error);
      alert("Si è verificato un errore durante il caricamento del file.");
    }
  };

  return (
    <>
      <i
        className="bi bi-pen fs-5 "
        onClick={() => setShowModal(true)}
        style={{ cursor: "pointer" }}
      ></i>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Nuova immagine del profilo</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <input type="file" onChange={handleFileChange} />
              <Button type="submit" variant="secondary">
                Carica file
              </Button>
            </form>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
}

export default EditProfile;
