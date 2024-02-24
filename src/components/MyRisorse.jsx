import "bootstrap/dist/css/bootstrap.min.css";
import "./style/MyRisorse.css";
import { Card, CardBody, CardFooter } from "react-bootstrap";

const MyRisorse = () => {
  return (
    <Card className="mb-2">
      <CardBody className="pb-0">
        <div>
          <h3 className="margin-bottom-0 fw-bold">Risorse</h3>
          <div className="d-flex align-items-baseline opacity-50">
            <div>
              <i className="bi bi-eye-fill"></i>
            </div>
            <p className="ms-2 mb-2 soloperte">Solo per te</p>
          </div>
        </div>
        <div>
          <div className="d-flex align-items-baseline">
            <div>
              <i className="bi bi-broadcast-pin"></i>
            </div>
            <div className="ms-2">
              <div className="d-flex">
                <p className="fw-semibold margin-bottom-0 text-underline">
                  Modalità creazione di contenuti
                </p>
                <span className="rispan ms-2 fw-semibold">No</span>
              </div>
              <p className="font-size-small">
                Fatti scoprire, metti in risalto i contenuti sul tuo profilo e
                accedi agli strumenti di creazione
              </p>
            </div>
          </div>
          <hr className="mt-0" />
          <div className="d-flex align-items-baseline">
            <div>
              <i className="bi bi-people-fill"></i>
            </div>
            <div className="ms-2">
              <p className="fw-semibold margin-bottom-0 text-underline">
                La mia rete
              </p>
              <p className="font-size-small">
                Salva e gestisci i tuoi collegamenti e interessi
              </p>
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter className="box-gray fw-semibold pb-0 ">
        <p className="mostra mb-2">Mostra tutte le risorse (5) ➝</p>
      </CardFooter>
    </Card>
  );
};

export default MyRisorse;
