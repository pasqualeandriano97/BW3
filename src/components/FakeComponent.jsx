import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addUserData } from "../redux/actions/actions";
import { useParams } from "react-router-dom";

const FetchTest = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  console.log(id);

  const handleFetch = () => {
    dispatch(addUserData());
  };

  return (
    <div>
      <Button onClick={handleFetch}>Fetch Data</Button>
    </div>
  );
};

export default FetchTest;
