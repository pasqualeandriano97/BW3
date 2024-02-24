import { Container, Row } from "react-bootstrap";
import SearchPageSx from "./SearchPageSx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { querySearch } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import SearchDetails from "./SearchDetails";

const SearchPage = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  console.log(query);
  useEffect(() => {
    dispatch(querySearch(query));
  }, [query]);
  return (
    <Container>
      <Row>
        <SearchPageSx />
        <SearchDetails />
      </Row>
    </Container>
  );
};

export default SearchPage;
