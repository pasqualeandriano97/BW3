import "bootstrap/dist/css/bootstrap.min.css";
import "./style/MyAnalisi.css";
import { Card, CardBody, CardFooter } from "react-bootstrap";

const MyAnalisi = () => {
  return (
    <Card className="mb-2 ">
      <CardBody className="p-0 ps-3 pt-2">
        <div>
          <h3 className="mb-0 fw-bold">Analisi</h3>
          <div className="d-flex align-items-baseline opacity-50 ">
            <div>
              <i className="bi bi-eye-fill"></i>
            </div>
            <p className="ms-2 soloperte">Solo per te</p>
          </div>
        </div>
        <div>
          <div className="d-flex align-items-baseline">
            <div>
              <i className="bi bi-pen "></i>
            </div>
            <div className="ms-2">
              <p className="fw-semibold mb-0 text-underline">
                0 visualizzazioni del profilo
              </p>
              <p className="font-size-small">
                Aggiorna il tuo profilo per <br /> attrarre visitatori.
              </p>
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter className="box-gray fw-semibold">
        <p className="mb-0 mostra">Mostra tutte le analisi ➝</p>
      </CardFooter>
    </Card>
  );
};

export default MyAnalisi;
