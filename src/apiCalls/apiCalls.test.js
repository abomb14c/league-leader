import * as api from './apiCalls';
import {soccerKey, nbaKey} from '../apiKeys';
import { cleanEPLData, mockDirtySoccer } from '../mockData/mockEPLData';
import { mockNBAData, mockCleanNBAData } from '../mockData/mockNBAData';

describe("apiCalls", () => {
  describe("fetchEnglandScores", () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockDirtySoccer)
        })
      );
    });

    it("Should be called with the right params", async () => {
      const url = `https://api.sportradar.us/soccer-t3/eu/en/tournaments/sr:tournament:17/live_standings.json?api_key=${soccerKey}`;

      await api.fetchEnglandScores();

      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it("Should return an array of soccer teams", async () => {
      await expect(api.fetchEnglandScores()).resolves.toEqual(cleanEPLData);
    });
  });
  
  describe("fetchNBATeams", () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockNBAData)
        })
      );
    });

    it("Should be called with the right params", async () => {
      const url = `http://api.sportradar.us/nba/trial/v4/en/seasons/2017/REG/standings.json?api_key=${nbaKey}`;

      await api.fetchNbaTeams();

      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it("Should return an object of NBA Teams", async () => {
      await expect(api.fetchNbaTeams()).resolves.toEqual(mockCleanNBAData);
    });
  });

});