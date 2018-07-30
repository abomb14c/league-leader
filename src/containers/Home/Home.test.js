import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import  { Home }  from './Home';

describe('Home', () => {
  let wrapper;

  beforeEach(() => {

    wrapper = shallow(<Home/>);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});