import leagueReducer from './leagueReducer';

describe('leagueReducer', () => {
  it('should return the initial state', () => {

    const expected = {};

    const result = leagueReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return leagueInfo on action.type of "ADD_NEW_LEAGUE', () => {
    
    const leagueInfo = {     
      league_type: 'epl',
      name: 'name',
      bet: 'jersey'
    };

    const mockState = {};

    const mockAction = {
      type:"ADD_NEW_LEAGUE",
      leagueInfo
    };

    const result = leagueReducer(mockState, mockAction);

    expect(result).toEqual(leagueInfo);
  });

  it('should return an empty object on action.type "LOGOUT_USER"', () => {

    const mockState = {};

    const mockAction = {
      type: "LOGOUT_USER"
    };

    const expected = {};

    const result = leagueReducer(mockState, mockAction);

    expect(result).toEqual(expected);

  });
});