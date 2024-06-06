/* eslint-disable */

import React from "react";
import { useParams } from "react-router-dom";

function DetailPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Movie Detail Page</h1>
      <p>Movie ID: {id}</p>
    </div>
  );
}

export default DetailPage;
