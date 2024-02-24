import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import DOMPurify from "dompurify";
import { useDispatch, useSelector } from "react-redux";

const SearchDetails = function () {
  const [htmlContent, setHtmlContent] = useState("");
  const [currentCompany, setCurrentCompany] = useState("");

  const company = useSelector((state) => state.search.current.company_name);
  const title = useSelector((state) => state.search.current.title);
  const [currentJob, setCurrentJob] = useState({
    title: "",
    description: "",
  });
  useEffect(() => {
    setCurrentCompany(company);
    setCurrentJob({ title: title, description: company });
    console.log(company);

    async function fetchData() {
      try {
        const response = await fetch(
          "https://strive-benchmark.herokuapp.com/api/jobs?company=" +
            currentCompany
        );
        const { data } = await response.json();
        const sanitizedData = DOMPurify.sanitize(data[0].description); // Utilizza DOMPurify per pulire il testo HTML
        setHtmlContent(sanitizedData);
      } catch (error) {
        console.error("Error fetching HTML:", error);
      }
    }

    fetchData();
  }, [company]);

  return (
    <>
      <Col className="col-lg-6 bg-white">
        <h3>{currentJob.title}</h3>
        <p>{currentJob.description}</p>

        {currentCompany === undefined ? (
          <p>Nessun lavoro selezionato</p>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        )}
      </Col>
    </>
  );
};

export default SearchDetails;
