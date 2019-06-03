import React from "react";
import QueueItem from "../QueueItem";

import "./QueueListing.scss";

const QueueListing = ({ queue }) => (
  <table className="table">
    <thead>
      <tr className="table__row table__heading">
        <th className="table__cell">id</th>
        <th className="table__cell">Start time</th>
        <th className="table__cell">Name</th>
        <th className="table__cell">Topic</th>
        <th className="table__cell">Time in Queue</th>
      </tr>
    </thead>
    <tbody>
      {queue.new !== null ? (
        queue.new.map(item => <QueueItem key={item.uniQref} item={item} />)
      ) : (
        <tr className="table__row">
          <td className="table__cell" colSpan="5">No users in queue</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default QueueListing;
