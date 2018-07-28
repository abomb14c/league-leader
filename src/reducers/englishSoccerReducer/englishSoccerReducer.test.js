import englishSoccerReducer from './englishSoccerReducer';

describe('englishSoccerReducer', () => {
  it('should return the initial state', () => {

    const expected = [];

    const result = englishSoccerReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return EPL on action.type of "ADD_ENGLISH_SOCCER', () => {
    
    const expected = [{}, {}];

    const mockState = [];

    const mockAction = {
      type:"ADD_ENGLISH_SOCCER",
      EPL: expected 
    };

    const result = englishSoccerReducer(mockState, mockAction);

    expect(result).toEqual(expected);

  });
});