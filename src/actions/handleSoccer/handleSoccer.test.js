import {updateEnglishSoccer} from './handleSoccer';

describe('action updateEnglishSoccer', () => {
  it('should have a type of ADD_ENGLISH_SOCCER', () => {
    
    const soccerData = [{}, {}, {}];

    const expectedAction = {
      type: 'ADD_ENGLISH_SOCCER',
      EPL: soccerData
    };

    const result = updateEnglishSoccer(soccerData);

    expect(result).toEqual(expectedAction);
  });
});
