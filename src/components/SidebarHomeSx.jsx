import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profileBgTop from "../assets/profileBgTop.png";

import ProfileMan from "../assets/ProfileMan.png";
import { useSelector } from "react-redux";

function SidebarSx() {
  const numeroRandom = Math.floor(Math.random() * 99) + 1;
  const numeroRandom1 = Math.floor(Math.random() * 99) + 1;
  const nomeUtente = useSelector((state) => state.user.content.name);
  const cognomeUtente = useSelector((state) => state.user.content.surname);
  const profileImage = useSelector((state) => state.user.content.image);
  const title = useSelector((state) => state.user.content.title);

  return (
    <Col className="col-lg-2 col-md-2 d-s-none mt-2 flex-grow-1 ">
      <Row>
        <Col className="px-0">
          <section className="m-2 border border overflow-auto ">
            <div className="position-relative">
              <img
                src={profileBgTop}
                alt=""
                className="img-fluid w-100 z-0 position-relative"
                style={{ height: "80px" }}
              />
              <img
                src={profileImage !== undefined ? profileImage : ProfileMan}
                alt=""
                className="profilePic position-absolute top-100 start-50 translate-middle rounded-circle border border-solid border-black-50"
                style={{ width: "90px", height: "90px" }}
              />
            </div>

            <div className="p-2">
              <div className="d-flex-column text-center">
                <p className="sidebarText fw-bold mt-5 pb-1">
                  {nomeUtente} {cognomeUtente}
                </p>
                <p className="sidebarText1 ">{title}</p>
              </div>

              <hr />
              <div className="">
                <span className="sidebarText2 fw-bold">
                  Visitatori del profilo
                </span>
                <span className="float-end text-secondary sidebarText1 fw-bold">
                  {numeroRandom}
                </span>
              </div>
              <div className="">
                <span className="sidebarText2 fw-bold">
                  Impressioni del post
                </span>
                <span className="float-end text-secondary sidebarText1 fw-bold">
                  {numeroRandom1}
                </span>
              </div>
              <hr />
              <div>
                <span className="sidebarText2">
                  Accedi a strumenti e informazioni in esclusiva
                </span>
                <p>
                  <span className="">
                    <i className="bi bi-slash-square-fill sidebarIcons"></i>
                  </span>
                  <span className="ms-1 sidebarText1 fw-bold">
                    Prova Premium per 0 EUR
                  </span>
                </p>
              </div>
              <hr />
              <div>
                <span>
                  <i className="bi bi-bookmark-fill sidebarIcons1"></i>
                </span>
                <span className="sidebarText2 ms-2 fw-bold">
                  I miei elementi
                </span>
              </div>
            </div>
          </section>
          <section className="p-2 m-2 border border">
            <div className="d-flex-column">
              <p className="sidebarText2">Recenti</p>
              <p>
                <span className="hashtag fw-bold">#</span>
                <span className="sidebarText2 ms-2 fw-bold">developing</span>
              </p>
              <p>
                <span className="hashtag fw-bold">#</span>
                <span className="sidebarText2 ms-2 fw-bold">epicode</span>
              </p>
              <hr />
              <p className="ms-1 sidebarText1 text-secondary fw-bold">Gruppi</p>
              <p className="ms-1 sidebarText1 text-secondary fw-bold">Eventi</p>
              <p className="ms-1 sidebarText1 text-secondary fw-bold">
                Hashtag seguiti
              </p>
              <p>
                <span className="hashtag fw-bold">#</span>
                <span className="sidebarText2 ms-2 fw-bold">developing</span>
              </p>
              <p>
                <span className="hashtag fw-bold">#</span>
                <span className="sidebarText2 ms-2 fw-bold">epicode</span>
              </p>
              <p>
                <span className="sidebarText2 ms-2 fw-bold">Vedi tutti</span>
              </p>
            </div>

            <hr />
            <div className="text-center sidebarText3">Scopri di più</div>
          </section>
        </Col>
      </Row>
    </Col>
  );
}

export default SidebarSx;
