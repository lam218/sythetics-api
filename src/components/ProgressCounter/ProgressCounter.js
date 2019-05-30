import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./ProgressCounter.scss";

const ProgressCounter = ({ chatCapacity }) => (
  <div className="progress-counter">
    <CircularProgressbar value={chatCapacity} text={`${chatCapacity}%`} />
    <p className="progress-counter__summary">Current chat capacity</p>
  </div>
);

export default ProgressCounter;
