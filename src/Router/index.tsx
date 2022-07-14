import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthenticationControl } from "../functions/AuthenticationControl";
const Authorization = lazy(() => import("../views/Authorization"));
const UnAuthorization = lazy(() => import("../views/UnAuthorization"));
const Router = () => {
  return (
    <div>
      {" "}
      <Routes>
        <Route
          path="/Authorization"
          element={
            <AuthenticationControl
              path="/Authorization"
              component={Authorization}
            />
          }
        />
        <Route path="/UnAuthorization" element={<UnAuthorization />} />
      </Routes>
    </div>
  );
};

export default Router;
