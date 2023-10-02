import React from "react";

import { Helmet } from "react-helmet";
import jwtDecode from "jwt-decode";

export default function Profile() {
  let encodedToken = localStorage.getItem("userToken");
  let decodedToken = jwtDecode(encodedToken);
  return (
    <>
      <Helmet>
        <meta name="description" content="" />
        <title>Profile</title>
      </Helmet>
      <div className="main-content">
        <h1 className="text-center my-3">Hello : {decodedToken.name}</h1>
      </div>
    </>
  );
}
