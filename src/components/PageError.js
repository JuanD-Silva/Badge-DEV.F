import React from "react";

import "./styles/PageError.css";

export default function PageError(props) {
  return (
    <div className="PageError">
      <p>
        <span role="img" aria-label="donut">
          ❌
        </span>
        {props.error.message}{" "}
        <span role="img" aria-label="donut">
          😳
        </span>
      </p>
    </div>
  );
}
