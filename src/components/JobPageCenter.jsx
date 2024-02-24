import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { saveAllJobs } from "../redux/actions/actions";
import { saveCategoryJobs } from "../redux/actions/actions";
import { useEffect } from "react";
import { useState } from "react";

const JobCenter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(saveAllJobs());
    dispatch(saveCategoryJobs());
  }, []);
  const categoryJobs = useSelector((state) => state.jobs.categoryJobs);
  const jobs = useSelector((state) => state.jobs.allJobs);
  console.log("jobs", jobs);
  console.log("categoryJobs", categoryJobs);
  return (
    <>
      <Row className="bg-white mt-2 border rounded justify-content-center px-0">
        <Col>
          <div className="p-3 pt-5">
            <h4>Consigliato per te</h4>
            <p className="cronologia">
              Sulla base del tuo profilo e della tua cronologia delle ricerche
            </p>
          </div>
        </Col>
        <Row className="mt-1 px-0">
          {categoryJobs.map((job) => (
            <Col sm={12} key={job._id} className="">
              <div>
                <div className="border-bottom border-2 border-black-50 py-2 px-2">
                  <a
                    href={job.url}
                    className="text-decoration-none text-black d-flex justify-content-between"
                  >
                    <h5 className="bluetext">{job.title}</h5>
                    <i className="fs-4 bi bi-x "></i>
                  </a>
                  <p className=" mb-1">{job.company_name}</p>
                  <p className=" mb-1 cronologia">
                    {job.candidate_required_location}
                  </p>
                  <p className=" mb-1">Tipo di contratto: {job.job_type}</p>
                  {/* <div dangerouslySetInnerHTML={{ __html: job.description }} /> */}
                </div>
              </div>
            </Col>
          ))}
          <Col className="py-2 border-top border-1 border-black ">
            <h5 className="text-center cronologia">
              Mostra tutto <i className="bi bi-arrow-right"></i>
            </h5>
          </Col>
        </Row>
      </Row>
      <Row className="bg-white mt-2 border rounded justify-content-center px-0">
        <Col>
          <div className="p-3 pt-5">
            <h4>Altre offerte di lavoro per te</h4>
            <p className="cronologia">
              Sulla base del tuo profilo e della tua cronologia delle ricerche
            </p>
          </div>
        </Col>
        <Row className="mt-1 px-0">
          {jobs.map((job) => (
            <Col sm={12} key={job._id} className="">
              <div>
                <div className="border-bottom border-2 border-black-50 py-2 px-2">
                  <a href={job.url} className="text-decoration-none text-black">
                    <h5 className="bluetext">{job.title}</h5>
                  </a>
                  <p className=" mb-1">{job.company_name}</p>
                  <p className=" mb-1 cronologia">
                    {job.candidate_required_location}
                  </p>
                  <p className=" mb-1">Tipo di contratto: {job.job_type}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Row>
    </>
  );
};

export default JobCenter;
