import React from 'react';
import { shallow, mount } from 'enzyme';
import DashboardContainer from './DashboardContainer';
import Dashboard from './Dashboard';

it('renders container', () => {
  mount(<DashboardContainer />).unmount();
});


it('renders dashboard', () => {
    shallow(<Dashboard />);
  });