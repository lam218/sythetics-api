import React, { PureComponent } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";

import "./Dashboard.scss";

export default class DashboardContainer extends PureComponent {
  constructor() {
    super();
    this.callApi = this.callApi.bind(this);
    this.callApiOnLoop = this.callApiOnLoop.bind(this);
    this.state = {
      response: { livechat: {} },
      availableSlots: 0,
      potentialSlots: 0,
      percentageAvailable: 0,
      chatCapacity: 0
    };
  }
  componentDidMount() {
    this.callApiOnLoop();
  }
  callApiOnLoop() {
    this.callApi();
    setInterval(this.callApi, 30000);
  }
  callApi() {
    axios
      .get(
        "https://apistaging.syn-finity.com/1.1/metrics/livechat/public/realtime?data_requested[]=totalchats&data_requested[]=missedchats&data_requested[]=ongoingchats&data_requested[]=availableslots&data_requested[]=abandonedchats&data_requested[]=userstatus&data_requested[]=requestedchats&data_requested[]=completedchats&data_requested[]=usermax&data_requested[]=userchats&data_requested[]=usercallbacks&data_requested[]=bookedcallbacks&data_requested[]=missedcallbacks&data_requested[]=failedcallbacks&data_requested[]=cancelledcallbacks&data_requested[]=completedcallbacks&data_requested[]=ongoingcallbacks",
        {
          headers: {
            APPLICATIONKEY: "cb04baf9fecab4fa51c10773ba3bb0e7",
            CONSUMERKEY: "a33f1865ad41ccd1a972cda86b6c6535"
          }
        }
      )
      .then(response => {
        this.setState({ response: response.data });
        this.calculateAvailableSlots(
          response.data.availableslots,
          response.data["user status"]
        );
      });
  }

  calculateAvailableSlots(slots, users) {
    let numberAvailable = 0;
    let potentialSlots = 0;
    for (let i = 0; i < slots.length; i++) {
      numberAvailable = numberAvailable + slots[i]["slots remaining"];
      potentialSlots =
        potentialSlots + slots[i]["slots remaining"] + slots[i].chats;
    }

    this.setState({
      potentialSlots,
      availableSlots: numberAvailable,
      percentageAvailable: `${Math.round(
        (numberAvailable / potentialSlots) * 100
      )}%`
    });
    this.calculateAllUsers(users, potentialSlots);
  }
  calculateAllUsers(users, potentialSlots) {
    let maxCapacity = 0;
    for (let i = 0; i < users.length; i++) {
      if (users[i].status === "available") {
        maxCapacity = maxCapacity + users[i].max;
      }
    }
    this.setState({
      chatCapacity: Math.round((maxCapacity / potentialSlots) * 100)
    });
  }
  render() {
    const {
      response: {
        livechat: { ongoing, requested }
      },
      potentialSlots,
      availableSlots,
      percentageAvailable,
      chatCapacity
    } = this.state;
    return (
      <div className="dashboard">
        <h1 className="dashboard__heading">Chat capacity</h1>
        <Dashboard
          chatCapacity={chatCapacity}
          potentialSlots={potentialSlots}
          availableSlots={availableSlots}
          percentageAvailable={percentageAvailable}
          ongoingChats={ongoing}
          requestedChats={requested}
        />
      </div>
    );
  }
}
