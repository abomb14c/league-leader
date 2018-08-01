import leagueIDReducer from './leagueIDReducer';

describe('leagueReducer', () => {
  it('should return the initial state', () => {

    const expected = null;

    const result = leagueIDReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return leagueID on action.type of "ADD_LEAGUE_ID', () => {
    
    const leagueID = {     
      id: 2
    };

    const mockState = null;

    const mockAction = {
      type:"ADD_LEAGUE_ID",
      leagueID
    };

    const result = leagueIDReducer(mockState, mockAction);

    expect(result).toEqual(leagueID);
  });

  it('should return null on action.type "LOGOUT_USER"', () => {

    const mockState = null;

    const mockAction = {
      type: "REMOVE_ID"
    };

    const expected = null;

    const result = leagueIDReducer(mockState, mockAction);

    expect(result).toEqual(expected);

  });
});