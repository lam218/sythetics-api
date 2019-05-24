import React, { PureComponent } from "react";
import axios from "axios";
import QueueListing from "./QueueListing";

export default class QueueListingContainer extends PureComponent {
  constructor() {
    super();
    this.state = {
      queue: {
        new: [
          {
            uniQref: "fTUlC9ZsY003x",
            skill: "Web self-service",
            name: "test",
            initation_time: "2018-11-27 14:15:50",
            lapsed_time: 3,
            brand: "",
            bump: false,
            channel: "Live chat",
            phone: "",
            timeframe: null,
            due_time: 1543328153
          }
        ]
      }
    };
  }
  componentDidMount() {
    // axios
    //   .get("https://apistaging.syn-finity.com/1.1/queue/display", {
    //     headers: {
    //       APPLICATIONKEY: "cb04baf9fecab4fa51c10773ba3bb0e7",
    //       CONSUMERKEY: "a33f1865ad41ccd1a972cda86b6c6535"
    //     }
    //   })
    //   .then(response => {
    //     this.setState({ queue: response.data });
    //   }).catch(err => console.error(err));
  }
  render() {
    const { queue } = this.state;
    return (
      <div>
        <h3>Currently in queue</h3>
        <QueueListing queue={queue} />
      </div>
    );
  }
}
