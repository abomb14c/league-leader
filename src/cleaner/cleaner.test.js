import * as cleaner from './cleaner';
import {mockEPLData, cleanEPLData } from '../mockData/mockEPLData';
import {mockNBAData, mockCleanNBAData, mockNbaDraftData} from '../mockData/mockNBAData';

describe('cleanEnglishSoccer', () => {
  it('should return an array of objects with the correct keys,', () => {

    const expected = cleanEPLData;

    const result = cleaner.cleanEnglishSoccer(mockEPLData);

    expect(result).toEqual(expected);

  });
});

describe('nbaCleaner', () => {
  it('should return an object with conferences as keys and an array of teams as values', () => {
    
    const expected = mockCleanNBAData;

    const result = cleaner.nbaCleaner(mockNBAData);

    expect(result).toEqual(expected);
  });
});

describe('nbaDraftCleaner', () => {
  it('should return an array of nbaTeams', () => {
    
    const expected = mockNbaDraftData;

    const result = cleaner.nbaDraftCleaner(mockCleanNBAData);

    expect(result).toEqual(expected);
  });
});