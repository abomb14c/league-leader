import * as api from './apiCalls';
import {soccerKey, nbaKey} from '../apiKeys';
import {cleanEPLData, mockDirtySoccer} from '../mockData/mockEPLData';

describe("apiCall", () => {
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

    it("Should return an object if status code is ok", async () => {
      await expect(api.fetchEnglandScores()).resolves.toEqual(cleanEPLData);
    });
  });
});