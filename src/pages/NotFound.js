import React from "react";
import notfound from "../images/404 Error Page not Found with people connecting a plug-amico.png";
import "../components/styles/NotFound.css";

function NotFound() {
  return <img className="imagen-404" src={notfound} alt="404" />;
}

export default NotFound;
