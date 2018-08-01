import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import  { DraftSection, mapStateToProps, mapDispatchToProps}  from './DraftSection';
import { addLeagueFetch } from '../../apiCalls/apiCalls';

jest.mock('./../../apiCalls/apiCalls');

describe('DraftCard', () => {
  let wrapper;
  let mockProps;
  let mockHandleLeagueID;
  beforeEach(() => {
    mockHandleLeagueID = jest.fn();
    mockProps = {
      league: {},
      draftTeams: [],
      user: {user_id:1}
    };

    wrapper = shallow(<DraftSection
      handleLeagueID={mockHandleLeagueID}
      {...mockProps}
    />);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe('handleSubmit', () => {

    it('should calls addLeagueFetch with the correct params', async () => {
     
      const mockEvent = {
        preventDefault: jest.fn()
      };

      await Promise.resolve(wrapper.instance().handleSubmit(mockEvent));
      
      expect(addLeagueFetch).toHaveBeenCalled();  
    });

    it('should call handleLeagueID with the correct params', async () => {
      const mockEvent = {
        preventDefault: jest.fn()
      };

      const mockID = {
        id:1
      };

      await wrapper.instance().handleSubmit(mockEvent);
      expect(mockHandleLeagueID).toHaveBeenCalledWith(mockID);
    });
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
  
  describe('mapDispatchtoProps', () => {
    it('handleLeagueID should be called with the correct params', async () => {

      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);

      const mockLeagueID = {
        id:2
      };

      const mockAction = {
        type: "ADD_LEAGUE_ID", 
        leagueID:mockLeagueID
      };

  
      mappedProps.handleLeagueID(mockLeagueID);

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  });
});
