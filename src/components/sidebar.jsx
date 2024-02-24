import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import avatarMichela from "../assets/1705333174881.jpg";
import Button from "react-bootstrap/Button";
import avatarRoberta from "../assets/robi.webp";
import avatarPasquale from "../assets/pasquale.jpeg";
import avatarFilippo from "../assets/Filippo fixed.jpg";
import avatarJovel from "../assets/jovel.jpeg";
import pubblicità from "../assets/pubblicità.webp";
import { useParams } from "react-router-dom";

const Sidebar = () => {
  const params = useParams();
  const user = params.username;

  const michelaLink = "www.linkedin.com/in/michela-vivacqua-56b1242a7";
  const jovelLink = "www.linkedin.com/in/jovel-jhon-marcko-asirot-20295524a";
  const pasqualeLink = "www.linkedin.com/in/pasquale-andriano-392b96281";
  const robertaLink = "www.linkedin.com/in/roberta-stira-20330b152";
  const filippoLink = "www.linkedin.com/in/filippo-borelli";

  return (
    <Col className="col-3 d-flex flex-end">
      <Row>
        <Col>
          <section className="p-2 m-2 border border">
            <div>
              <div className="d-flex justify-content-between">
                <h4>Lingua del profilo</h4>
                <i className="bi bi-pen "></i>
              </div>
              <p>Italiano</p>
            </div>
            <hr />
            <div>
              <div className="d-flex justify-content-between">
                <h4>Public profile & URL</h4>
                <i className="bi bi-pen "></i>
              </div>

              <p>
                {user === "Michela"
                  ? michelaLink
                  : user === "Jovel"
                  ? jovelLink
                  : user === "Pasquale"
                  ? pasqualeLink
                  : user === "Roberta"
                  ? robertaLink
                  : user === "Filippo"
                  ? filippoLink
                  : ""}
              </p>
            </div>
          </section>
          <div>
            <img src={pubblicità} alt="adv" id="adv" />
          </div>
          <section className="p-2 m-2 border border">
            <div>
              <h4>Persone che potresti conoscere</h4>
              <p className="mb-5">Dal tuo settore</p>
              <div className="border-bottom pb-4 ">
                <div className="d-flex align-items-center">
                  <img src={avatarMichela} alt="avatar" className="avatar" />
                  <h6 className="ms-2">Michela Vivacqua</h6>
                </div>
                <p className="ms-5">
                  Front-end web developer graduated by Epicode
                </p>
                <div className="d-flex justify-content-center">
                  <Button variant="outline-secondary">
                    <i className="bi bi-person-add"></i> Collegati
                  </Button>
                </div>
              </div>
              <div className="border-bottom pb-4 ">
                <div className="d-flex align-items-center mt-4">
                  <img src={avatarRoberta} alt="avatar" className="avatar" />
                  <h6 className="ms-2">Roberta Stira</h6>
                </div>
                <p className="ms-5">
                  Front-end web developer graduated by Epicode
                </p>
                <div className="d-flex justify-content-center">
                  <Button variant="outline-secondary">
                    <i className="bi bi-person-add"></i> Collegati
                  </Button>
                </div>
              </div>
              <div className="border-bottom pb-4 ">
                <div className="d-flex align-items-center mt-4">
                  <img src={avatarPasquale} alt="avatar" className="avatar" />
                  <h6 className="ms-2">Pasquale Andriano</h6>
                </div>
                <p className="ms-5">
                  Front-end web developer graduated by Epicode
                </p>
                <div className="d-flex justify-content-center">
                  <Button variant="outline-secondary">
                    <i className="bi bi-person-add"></i> Collegati
                  </Button>
                </div>
              </div>
              <div className="border-bottom pb-4 ">
                <div className="d-flex align-items-center mt-4">
                  <img src={avatarFilippo} alt="avatar" className="avatar" />
                  <h6 className="ms-2">Filippo Borelli </h6>
                </div>
                <p className="ms-5">
                  Front-end web developer graduated by Epicode
                </p>
                <div className="d-flex justify-content-center">
                  <Button variant="outline-secondary">
                    <i className="bi bi-person-add"></i> Collegati
                  </Button>
                </div>
              </div>
              <div className="d-flex align-items-center mt-4">
                <img src={avatarJovel} alt="avatar" className="avatar" />
                <h6 className="ms-2">Jovel Asirot</h6>
              </div>
              <p className="ms-5">
                Front-end web developer graduated by Epicode
              </p>
              <div className="d-flex justify-content-center">
                <Button variant="outline-secondary">
                  <i className="bi bi-person-add"></i> Collegati
                </Button>
              </div>
              <hr />
              <h6 className="text-center">Mostra tutto</h6>
            </div>
          </section>
        </Col>
      </Row>
    </Col>
  );
};

export default Sidebar;
