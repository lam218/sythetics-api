import React, {PureComponent} from 'react';
import Dashboard from './Dashboard';


  
  export default class DashboardContainer extends PureComponent {
    render() {
      return (
        <div>
            <h1>Chat capacity</h1>
          <Dashboard />
        </div>
      );
    }
  }