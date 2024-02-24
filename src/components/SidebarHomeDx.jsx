import { useState } from "react";
import { ListGroup, Button, Col } from "react-bootstrap";
import HomeDxFooter from "./HomeDxFooter";

const SidebarHomeDx = () => {
  const items = [
    { title: "• Come se la passano i pendolari", content: "1 giorno fa" },
    { title: "• JS o TS? Pro e contro", content: "oggi" },
    { title: "• Vite, CRA non ha più utenti", content: "3 giorni fa" },
    { title: "• Epicoder richiesti in tutte le aziende", content: "14 ore fa" },
    { title: "• Frontender specialist", content: "2 giorni fa" },
    { title: "• Clonare LinkedIn", content: "2 ore fa" },
    { title: "• Inverno Soleggiato", content: "7 giorni fa" },
    { title: "• Non c'è neve in montagna", content: "19 ore fa" },
    { title: "• Aperitivi al mare a Febbraio", content: "4 giorni fa" },
    { title: "• TEAM 7 ♥", content: "oggi" },
  ];

  const [espandiLista, setEspandiLista] = useState(false);

  return (
    <>
      <Col lg={3} className="d-none d-md-block mt-3 ">
        {" "}
        <section className="border border-muted">
          <div className="d-flex justify-content-between ">
            <h5 className="m-3">LinkedIn Notizie</h5>
            <i className="bi bi-info-square-fill m-3"></i>
          </div>
          <div className="px-3">
            {items.slice(0, 5).map((item, index) => (
              <ListGroup.Item key={index} as="li">
                <h6>{item.title}</h6>
                <p>{item.content}</p>
              </ListGroup.Item>
            ))}
          </div>

          {espandiLista && (
            <div className="px-3">
              {items.slice(5).map((item, index) => (
                <ListGroup.Item key={index} as="li">
                  <h6>{item.title}</h6>
                  <p>{item.content}</p>
                </ListGroup.Item>
              ))}
            </div>
          )}

          {items.length > 5 && (
            <div className="ms-3 mb-3">
              <div onClick={() => setEspandiLista(!espandiLista)}>
                <span className="showMore p-2 rounded-2">
                  {espandiLista ? "Meno dettagli" : "Vedi altro"}
                  {espandiLista ? (
                    <i className="bi bi-caret-up"></i>
                  ) : (
                    <i className="bi bi-caret-down"></i>
                  )}
                </span>
              </div>
            </div>
          )}
        </section>
        <HomeDxFooter />
      </Col>
    </>
  );
};

export default SidebarHomeDx;
