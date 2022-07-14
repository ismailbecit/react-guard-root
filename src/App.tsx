import React, { lazy } from "react";
const Router = lazy(() => import("./Router"));
const Layout = lazy(() => import("./views/Layout"));
function App() {
  return (
    <>
      <Layout />
      <Router />
    </>
  );
}

export default App;
