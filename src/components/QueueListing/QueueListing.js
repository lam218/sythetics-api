import React from "react";
import QueueItem from "../QueueItem";

const QueueListing = ({ queue }) => (
  <div>
    {queue.new.map(item => (
      <QueueItem key={item.uniQref} item={item} />
    ))}
  </div>
);

export default QueueListing;
