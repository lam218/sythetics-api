import React from 'react';
import { shallow, mount } from 'enzyme';
import QueueListingContainer from './QueueListingContainer';
import QueueListing from './QueueListing';


it('renders container', () => {
    mount(<QueueListingContainer />).unmount();
  });


it('renders empty table', () => {
    const props = {
        queue: {
            new: null
        }
    }
    shallow(<QueueListing {...props}/>);
  });
  
  it('renders table', () => {
    const props = {
        queue: {
            "new": [
                {
                    "uniQref": "fTUlC9ZsY003x",
                    "skill": "Web self-service",
                    "name": "test",
                    "initation_time": "2018-11-27 14:15:50",
                    "lapsed_time": 3,
                    "brand": "",
                    "bump": false,
                    "channel": "Live chat",
                    "phone": "",
                    "timeframe": null,
                    "due_time": 1543328153
                }
            ]
        }
    }
    shallow(<QueueListing {...props}/>);
  });
  
