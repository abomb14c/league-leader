import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import  { EPLContainer, mapStateToProps}  from './EPLContainer';

describe('EPLContainer', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {

    mockProps = {
      EPL: [{}, {}, {}]
    };

    wrapper = shallow(<EPLContainer
      {...mockProps}
    />);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should map the EPL to props', () => {
    const mockState = {
      league: {},
      EPL: [{}, {}, {}],
      draftTeams: [{}, {}, {}]
    };

    const expected = {
      EPL: [{}, {}, {}]
    };
    
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});
