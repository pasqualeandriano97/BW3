import "bootstrap/dist/css/bootstrap.min.css";
import "./style/MyAttivita.css";
import { Button, Card, CardBody, CardFooter } from "react-bootstrap";

const MYAttività = () => {
  return (
    <Card className="mb-2 p-0">
      <CardBody className="p-0 pt-3">
        <div className="d-flex justify-content-between ms-4  me-4">
          <div>
            <h3 className="mb-0 fw-bold">Attività</h3>
            <p className="fw-semibold text-underline follower">0 follower</p>
          </div>
          <div className="d-flex align-items-top">
            <div className="me-1">
              <Button className="rounded-pill px-3 py-1 btn btn-outline-primary me-2 fw-semibold text-dark">
                Crea un post
              </Button>
            </div>

            <div className="ms-1 mt-1">
              <i className="bi bi-pen "></i>
            </div>
          </div>
        </div>
        <div className="ms-4">
          <p className="mb-0 fw-semibold lh">Non hai ancora pubblicato nulla</p>
          <p>I post che condividi appariranno qui</p>
        </div>
      </CardBody>
      <CardFooter className="box-gray fw-semibold">
        <p className="mostra mb-0">Mostra tutte le attività ➝</p>
      </CardFooter>
    </Card>
  );
};

export default MYAttività;
