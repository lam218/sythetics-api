import React from "react";

import "./DataBox.scss";

const DataBox = ({ title, number, additionalData }) => (
  <div className="data-box">
    <p className="data-box__heading">{title}</p>
    <div className="data-box__data-container">
      <p className="data-box__data">{number}</p>
{additionalData && <p className="data-box__supData">({additionalData})</p>}
    </div>
  </div>
);

export default DataBox;
