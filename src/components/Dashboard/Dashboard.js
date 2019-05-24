import React from 'react';
import DataBox from '../DataBox';
import ProgressCounter from '../ProgressCounter';
import QueueListing from '../QueueListing';

const Dashboard = () => <div><DataBox/><ProgressCounter/><div><h3>Currently in queue</h3><QueueListing /></div></div>;

export default Dashboard;