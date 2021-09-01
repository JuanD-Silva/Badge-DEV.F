import React from "react";
import notFound from "../images/404 Error Page not Found with people connecting a plug-amico.png";
import "../components/styles/NotFound.css";

function NotFound() {
	return (
		<>
			<img alt="not-found" src={notFound}></img>
		</>
	);
}

export default NotFound;
