import {addLeagueID, removeLeagueID} from './updateLeagueID';

describe('action addLeagueID', () => {
  it('should have a type of ADD_LEAGUE_ID', () => {
    
    const leagueID = {};
    const expectedAction = {
      type: 'ADD_LEAGUE_ID',
      leagueID
    };

    const result = addLeagueID(leagueID);

    expect(result).toEqual(expectedAction);
  });
});

describe('action removeLeagueID', () => {
  it('should have a type of REMOVE_LEAGUE_ID', () => {
    
  
    const expectedAction = {
      type: 'REAMOVE_LEAGUE_ID'
    };

    const result = removeLeagueID();

    expect(result).toEqual(expectedAction);
  });
});