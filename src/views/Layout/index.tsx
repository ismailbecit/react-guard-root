import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={"/unAuthorization"}>unAuthorization</Link>
        </li>
        <li>
          <Link to={"/authorization"}>authorization</Link>
        </li>
      </ul>
    </>
  );
};

export default Layout;
