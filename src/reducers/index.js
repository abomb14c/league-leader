import { combineReducers } from 'redux';
import userReducer from './userReducer/userReducer';
import englishSoccerReducer from './englishSoccerReducer/englishSoccerReducer';
import leagueReducer from './leagueReducer/leagueReducer';
import draftTeamReducer from './draftTeamReducer/draftTeamReducer';
import nbaReducer from './nbaReducer/nbaReducer';

const rootReducer = combineReducers({
  user: userReducer,
  EPL: englishSoccerReducer,
  NBA: nbaReducer,
  league: leagueReducer,
  draftTeams: draftTeamReducer
});

export default rootReducer;