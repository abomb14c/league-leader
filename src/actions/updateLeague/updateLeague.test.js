import {createLeague} from './updateLeague';

describe('action createLeague', () => {
  it('should have a type of ADD_NEW_LEAGUE', () => {
    
    const leagueInfo = {};
    const expectedAction = {
      type: 'ADD_NEW_LEAGUE',
      leagueInfo
    };

    const result = createLeague(leagueInfo);

    expect(result).toEqual(expectedAction);
  });
});