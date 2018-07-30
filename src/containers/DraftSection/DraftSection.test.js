import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import  { DraftSection, mapStateToProps}  from './DraftSection';

describe('DraftCard', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {

    mockProps = {
      league: {},
      draftTeams: []
    };

    wrapper = shallow(<DraftSection
      {...mockProps}
    />);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should map the user to props', () => {
    const mockState = {
      league: {},
      EPL: [{}, {}, {}],
      draftTeams: [{}, {}, {}],
      text: ''
    };

    const expected = {
      league: {},
      EPL: [{}, {}, {}],
      draftTeams: [{}, {}, {}]
    };
    
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});
