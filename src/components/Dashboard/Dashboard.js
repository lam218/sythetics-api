import React from "react";
import DataBox from "../DataBox";
import ProgressCounter from "../ProgressCounter";

const Dashboard = ({
  potentialSlots,
  availableSlots,
  percentageAvailable,
  ongoingChats,
  requestedChats,
  chatCapacity
}) => {
  return (
    <div className="dashboard__inner">
      <div className="dashboard__column-one">
        <ProgressCounter 
        title={"chat capacity"}
        progress={ chatCapacity }/>
      </div>
      <div className="dashboard__column-two">
        <DataBox
          title={"Available chat slots"}
          number={availableSlots}
          additionalData={percentageAvailable}
        />
        <DataBox title={"Potential chat slots"} number={potentialSlots} />
        <DataBox title={"Ongoing chats"} number={ongoingChats} />
        <DataBox title={"Chats in queue"} number={requestedChats} />
      </div>
    </div>
  );
};

export default Dashboard;
