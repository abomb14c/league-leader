import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import  { SetupLeague, mapDispatchToProps}  from './SetupLeague';

describe('LoginUser', () => {
  let wrapper;
  let mockCreateNewLeague;
  let mockHandleDraftTeams;
  let mockProps;

  beforeEach(() => {
    mockCreateNewLeague = jest.fn();
    mockHandleDraftTeams = jest.fn();
    mockProps = {
      EPL: [{}, {}, {}],
      NBA: {'EASTERN CONFERENCE':[{}, {}, {}], 
        'WESTERN CONFERENCE': [{}, {}, {}]}
    };

    wrapper = shallow(<SetupLeague 
      handleDraftTeams={mockHandleDraftTeams}
      createNewLeague={mockCreateNewLeague}
      {...mockProps}
    />);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


  it("has a default state", () => {
    let expected = {
      showMenu: false,
      leagueName: '',
      leagueBet: '',
      league: ''
    };

    expect(wrapper.state()).toEqual(expected);
  });

  it('showMenu should toggle the state of showMenu to true', () => {
    
    const mockEvent = {
      preventDefault: jest.fn()
    };

    let expected = {
      showMenu: true,
      leagueName: '',
      leagueBet: '',
      league: ''
    };
      
    wrapper.instance().showMenu(mockEvent);
  
    expect(wrapper.state()).toEqual(expected);
  });

  it.skip('closeMenu should toggle the state of showMenu to false', () => {
    const mockEvent = {
      preventDefault: jest.fn()
    };
    
    const secondEvent = {element: wrapper.dropDownMenu};

    let expected = {
      showMenu: false,
      leagueName: '',
      leagueBet: '',
      league: ''
    };

    wrapper.instance().showMenu(mockEvent);
    wrapper.instance().closeMenu(secondEvent);
    expect(wrapper.state()).toEqual(expected);
  });

  describe('handleChange', () => {
    it("should update state on change", () => {

      let mockEvent = {
        target: { name: "league", value: "league" }
      };

      let expected = {
        showMenu: false,
        leagueName: '',
        leagueBet: '',
        league: "league"
      };
  
      wrapper.instance().handleChange(mockEvent);
  
      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe('handleSubmit', () => {

    it('should call createNewLeague with the correct params', () => {
      const mockEvent = {
        preventDefault: jest.fn()
      };

      const mockState = {
        leagueName: 'league',
        leagueBet: 'league',
        league: 'league'
      };

      const mockLeagueInfo = {
        league_type: mockState.league,
        name:  mockState.leagueName,
        bet: mockState.leagueBet
      };

      wrapper.instance().handleSubmit(mockEvent);
      expect(mockCreateNewLeague).toHaveBeenCalled();
    });

    it('should call handleDraftTeams if the state = epl', () => {

      const mockEvent = {
        preventDefault: jest.fn()
      };

      wrapper.setState({league:'EPL'});
      wrapper.instance().handleSubmit(mockEvent);
      expect(mockHandleDraftTeams).toHaveBeenCalled();
    });

    it('should call handleDraftTeams if the state = nba', () => {
      const mockEvent = {
        preventDefault: jest.fn()
      };

      wrapper.setState({league:'NBA'});
      wrapper.instance().handleSubmit(mockEvent);
      expect(mockHandleDraftTeams).toHaveBeenCalled();
    });
  });
});