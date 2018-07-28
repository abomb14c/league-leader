import {addNBA} from './handleNBA';

describe('action addNBA', () => {
  it('should have a type of ADD_NBA', () => {
    
    const nbaStats = {conference:[], conferenceTwo:[]};
    const expectedAction = {
      type: 'ADD_NBA',
      NBA: nbaStats
    };

    const result = addNBA(nbaStats);

    expect(result).toEqual(expectedAction);
  });
});

