import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addUserData } from "../redux/actions/actions";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const pasqualetoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzNGU4YzI0ZjYwNTAwMTkzN2Q0ODMiLCJpYXQiOjE3MDgzNDc3NDcsImV4cCI6MTcwOTU1NzM0N30.mthqNljgtCYQEBuKoZKcMpN6a22wDf15iDkgXjJsAoY";
const jovelToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMGRhMjI0ZjYwNTAwMTkzN2Q0NGIiLCJpYXQiOjE3MDgzMzA0MDIsImV4cCI6MTcwOTU0MDAwMn0.LYG5z94VApAqELv2LvNngtihtlh6Kyrv-RHbX7gxv0M";
const michelaToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTZjNzI0ZjYwNTAwMTkzN2Q0NmMiLCJpYXQiOjE3MDgzMzI3NDQsImV4cCI6MTcwOTU0MjM0NH0.iLEv5uw64zS02f1yE-pYpnFtV3SUF3TBPtkQgQrr8ik";
const robertaToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTE1YTI0ZjYwNTAwMTkzN2Q0NTAiLCJpYXQiOjE3MDgzMzEzNTQsImV4cCI6MTcwOTU0MDk1NH0.lLMwELubthCjSB0pm9ge5Sboz8l11VFsHgHTETuJSOs";
const filippoToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTI0MTI0ZjYwNTAwMTkzN2Q0NjAiLCJpYXQiOjE3MDgzMzE1ODUsImV4cCI6MTcwOTU0MTE4NX0.Th8sgbTW3CgZXXpWkdeUdUQLB-SZvMattf9ctCL5H8M";

const FetchTest = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [user, setUser] = useState("");
  useEffect(() => {
    switch (id) {
      case "pasquale":
        setUser(pasqualetoken);
        break;
      case "jovel":
        setUser(jovelToken);
        break;
      case "michela":
        setUser(michelaToken);
        break;
      case "roberta":
        setUser(robertaToken);
        break;
      case "filippo":
        setUser(filippoToken);
        break;
      default:
        console.log("no user");
    }
  }, []);

  const handleFetch = (id) => {
    dispatch(addUserData(id));
  };
  console.log(id);
  console.log(user);
  return (
    <div>
      <Button
        onClick={(e) => {
          e.preventDefault;
          handleFetch(user);
        }}
      >
        Fetch Data
      </Button>
    </div>
  );
};

export default FetchTest;
