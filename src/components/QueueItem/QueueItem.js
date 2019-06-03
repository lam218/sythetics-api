import React from "react";
import moment from "moment";
import "./QueueItem.scss";

const QueueItem = ({ item }) => {
  const timeInQueue = () => {
    let minutes = "00";
    let seconds = "00";
    if (item["lapsed_time"] > 60) {
      const minutesCalc = item["lapsed_time"] / 60;
      minutes = Math.floor(minutesCalc);
      seconds = Math.round((minutesCalc - minutes) * 60);
    } else {
      seconds = item["lapsed_time"];
    }
    const formattedTime = `${
      minutes < 10 && minutes !== "00" ? `0${minutes}` : minutes
    }:${seconds < 10 && seconds !== "00" ? `0${seconds}` : seconds}`;
    return formattedTime;
  };
  const RAGCell = () => {
    if (item["lapsed_time"] > 300) {
      return "table__cell--error";
    } else if (item["lapsed_time"] > 150) {
      return "table__cell--warning";
    }
    return "table__cell--success";
  };
  return (
    <tr className="table__row">
      <td className="table__cell">{item.uniQref}</td>
      <td className="table__cell">
        {moment(item.initation_time).format("HH:mm:ss")}
      </td>
      <td className="table__cell">{item.name}</td>
      <td className="table__cell">{item.skill}</td>
      <td className={`table__cell  ${RAGCell()}`}>{timeInQueue()}</td>
    </tr>
  );
};

export default QueueItem;
