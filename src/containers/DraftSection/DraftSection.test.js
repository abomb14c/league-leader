import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import  { DraftSection, mapStateToProps}  from './DraftSection';

describe('DraftCard', () => {
  let wrapper;
  let mockProps;
  let mockHandleLeagueID;
  beforeEach(() => {
    mockHandleLeagueID = jest.fn();
    mockProps = {
      league: {},
      draftTeams: []
    };

    wrapper = shallow(<DraftSection
      handleLeagueID={mockHandleLeagueID}
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
      draftPicks: [{}, {}, {}],
      text: '',
      user: {}
    };

    const expected = {
      league: {},
      draftPicks: [{}, {}, {}],
      user: {}
    };
    
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});
