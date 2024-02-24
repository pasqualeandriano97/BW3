import { Button } from "bootstrap";
import { useDispatch } from "react-redux";
import { addUserData } from "../redux/actions/actions";

const FetchTest = () => {
  const dispatch = useDispatch();

  const handleFetch = () => {
    dispatch(addUserData());
  };

  return <Button onClick={handleFetch}>Fetch Data</Button>;
};

export default FetchTest;
