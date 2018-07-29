import * as cleaner from './cleaner';
import {mockEPLData, cleanEPLData } from '../mockData/mockEPLData';

describe('cleanEnglishSoccer', () => {
  it('should return an object with the correct keys,', () => {

    const expected = cleanEPLData;

    const result = cleaner.cleanEnglishSoccer(mockEPLData);

    expect(result).toEqual(expected);

  });
});