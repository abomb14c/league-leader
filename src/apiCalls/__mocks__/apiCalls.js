import {cleanEPLData} from '../../mockData/mockEPLData';

export const fetchEnglandScores = jest.fn().mockImplementation(() => 
  Promise.resolve(cleanEPLData));


