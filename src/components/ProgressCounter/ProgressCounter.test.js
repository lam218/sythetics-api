import React from 'react';
import { shallow } from 'enzyme';
import ProgressCounter from './ProgressCounter';

it('renders container', () => {
  shallow(<ProgressCounter />);
});

it('renders renders error', () => {
    const props = {
        progress: 50,
        title: 'title'
    }
    shallow(<ProgressCounter {...props}/>);
  });
  
  it('renders renders warning', () => {
    const props = {
        progress: 70,
        title: 'title'
    }
    shallow(<ProgressCounter {...props}/>);
  });
  

  it('renders renders success', () => {
    const props = {
        progress: 90,
        title: 'title'
    }
    shallow(<ProgressCounter {...props}/>);
  });
  
