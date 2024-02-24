import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dveloper from "../assets/dveloper.png";
import epicodelogo from "../assets/epicodelogo.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CURRENT_COMPANY } from "../redux/actions/actions";

const studentiLavoratori = Math.floor(Math.random() * 99) + 1;
const candidatiLavoratori = Math.floor(Math.random() * 99) + 1;

function SearchPageSx() {
  const [jobsArray, setJobsArray] = useState([]);
  const jobs = useSelector((state) => state.search.content);
  const current = useSelector((state) => state.search.current);
  const dispatch = useDispatch();
  const handleClick = (obj) => {
    dispatch({ type: CURRENT_COMPANY, payload: obj });
  };
  useEffect(() => {
    setJobsArray(jobs);
  }, [jobs]);
  console.log(jobs);
  console.log(current);
  return (
    <Col className="col-lg-6 col-md-6 d-s-none">
      <Row>
        <Col>
          <section className="p-2 ">
            {jobsArray.map((job) => (
              <Row
                key={job._id}
                onClick={() => {
                  handleClick({
                    title: job.title,
                    company_name: job.company_name,
                  });
                }}
                className={
                  job.title === current.title
                    ? "bg-secondary bg-opacity-10 border-bottom py-2"
                    : "border-bottom py-2"
                }
              >
                <Col className="col-2">
                  <img
                    className="float-end"
                    src={dveloper}
                    alt="logo"
                    style={{ width: "90%", height: "auto" }}
                  />
                </Col>

                <Col className="col-10">
                  <div className="d-flex-column">
                    <div>
                      <a
                        href={job.url}
                        className="text-decoration-none bluetext1 fw-bold"
                      >
                        {job.title}
                      </a>
                    </div>
                    <div className="sidebarText1">{job.company_name}</div>
                    <div className="sidebarText2">{job.category}</div>
                    <div className="sidebarText2">
                      {job.candidate_required_location}
                    </div>
                    <div>
                      <span>
                        <img
                          src={epicodelogo}
                          alt="logo"
                          style={{ width: "4%", height: "auto" }}
                        />
                      </span>
                      <span className="ms-1 sidebarText2">
                        {studentiLavoratori} ex studenti lavorano qui
                      </span>
                    </div>

                    <div className="mt-2">
                      <span className="sidebarText2 fw-bold">
                        1 giorno fa ·{" "}
                      </span>
                      <span className="sidebarText2 greentext fw-bold">
                        {candidatiLavoratori} candidati
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            ))}{" "}
          </section>
        </Col>
      </Row>
    </Col>
  );
}

export default SearchPageSx;
