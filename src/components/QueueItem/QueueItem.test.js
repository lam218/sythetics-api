import React from "react";
import { shallow } from "enzyme";
import QueueItem from "./QueueItem";

it("renders item", () => {
  const props = {
    item: {
      uniQref: 1
    }
  };
  shallow(<QueueItem {...props} />);
});

it("renders item less than 60", () => {
  const props = {
    item: {
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
  };
  shallow(<QueueItem {...props} />);
});

it("renders item more than 300", () => {
  const props = {
    item: {
      uniQref: "fTUlC9ZsY003x",
      skill: "Web self-service",
      name: "test",
      initation_time: "2018-11-27 14:15:50",
      lapsed_time: 350,
      brand: "",
      bump: false,
      channel: "Live chat",
      phone: "",
      timeframe: null,
      due_time: 1543328153
    }
  };
  shallow(<QueueItem {...props} />);
});
it("renders item more than 150 and less than 300", () => {
  const props = {
    item: {
      uniQref: "fTUlC9ZsY003x",
      skill: "Web self-service",
      name: "test",
      initation_time: "2018-11-27 14:15:50",
      lapsed_time: 250,
      brand: "",
      bump: false,
      channel: "Live chat",
      phone: "",
      timeframe: null,
      due_time: 1543328153
    }
  };
  shallow(<QueueItem {...props} />);
});
