import React, { PureComponent } from "react";
import axios from "axios";
import QueueListing from "./QueueListing";

const config = {
  APPLICATIONKEY: process.env.APPLICATIONKEY,
  CONSUMERKEY: process.env.CONSUMERKEY
};
export default class QueueListingContainer extends PureComponent {
  constructor() {
    super();
    this.state = {
      bearerToken: null,
      queue: {
        new: []
      }
    };
  }
  componentDidMount() {
    this.callApiOnLoop();
  }
  callApiOnLoop() {
    this.getToken();

    setInterval(this.checkApi, 30000, this);
  }
  componentWillUnmount() {
    clearInterval(this.checkApi);
  }

  checkApi(comp) {
    const { bearerToken } = comp.state;
    axios
      .get("https://apistaging.syn-finity.com/1.1/external/session", {
        headers: {
          APPLICATIONKEY: config.APPLICATIONKEY,
          CONSUMERKEY: config.CONSUMERKEY,
          Authorization: "Bearer " + bearerToken
        }
      })
      .then(response => {
        if (response.data.ValidToken && !response.data.Expired) {
          comp.getQueue();
        } else {
          comp.getToken();
        }
      })
      .catch(error => console.error(error));
  }
  getToken() {
    axios({
      method: "POST",
      url: "https://apistaging.syn-finity.com/1.1/external/session",
      headers: {
        APPLICATIONKEY: config.APPLICATIONKEY,
        CONSUMERKEY: config.CONSUMERKEY,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        this.setState({ bearerToken: response.data.token });
        this.getQueue();
      })
      .catch(error => console.error(error));
  }
  getQueue() {
    const { bearerToken } = this.state;
    axios
      .get("https://apistaging.syn-finity.com/1.1/queue/display", {
        headers: {
          APPLICATIONKEY: config.APPLICATIONKEY,
          CONSUMERKEY: config.CONSUMERKEY,
          Authorization: "Bearer " + bearerToken
        }
      })
      .then(response => this.setState({ queue: response.data }))
      .catch(error => console.error(error));
  }
  render() {
    const { queue } = this.state;
    return (
      <div className="queue">
        <h3 className="queue__heading">Currently in queue</h3>
        <QueueListing queue={queue} />
      </div>
    );
  }
}
