import React, { useState, useEffect } from "react";
import axios from "./axios";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  //A snippet of code which runs based on a specific condition/varaible
  useEffect(() => {
    //if [], run once when the row loads, dont run again
    async function fetchData() {
      //wait for answer back then request
      const request = await axios.get(fetchUrl);
      console.log(request);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default Row;
