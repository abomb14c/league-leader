import { cleanEPLData } from '../../mockData/mockEPLData';
import { mockCleanNBAData } from '../../mockData/mockNBAData';


export const fetchEnglandScores = jest.fn().mockImplementation(() => 
  Promise.resolve(cleanEPLData));


export const fetchNbaTeams = jest.fn().mockImplementation(() => 
  Promise.resolve(mockCleanNBAData));

export const addUserFetch = jest.fn().mockImplementation(() => Promise.resolve({
  "id": 1
}));