import React from "react";

import Loading from "./Loading";
import Tours from "./Tours";

// const url = "https://course-api.com/react-tours-project";

const DisplayTours = () => {
  // const [tours, setTours] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // isLoading ? (<main><Loading/></main>) :
  return (
    <>
      <h1>Please chose the tour you like below:</h1>
      <Loading />
      <Tours />
    </>
  );
};

export default DisplayTours;
