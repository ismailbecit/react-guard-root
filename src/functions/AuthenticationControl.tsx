import { Navigate } from "react-router-dom";

export const AuthenticationControl = ({
  component: Component,
  ...rest
}: any) => {
  if (localStorage.getItem("user")) {
    return <Component {...rest} />;
  } else {
    alert("Lütfen Giriş Yapınız");
    return <Navigate to="/" />;
  }
};
