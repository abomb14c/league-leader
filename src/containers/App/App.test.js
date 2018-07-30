import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapDispatchToProps, mapStateToProps } from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  let mockHandleEnglishSoccer;
  let mockHandleNba;

  beforeEach(() => {
    mockHandleEnglishSoccer = jest.fn();
    mockHandleNba = jest.fn();

    wrapper = shallow(<App 
      handleEnglishSoccer={mockHandleEnglishSoccer}
      handleNba={mockHandleNba}
    />, { disableLifecycleMethods: true });
  });
  
  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });
});