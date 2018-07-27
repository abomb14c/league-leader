import { combineReducers } from 'redux';
import userReducer from './userReducer/userReducer';
import englishSoccerReducer from './englishSoccerReducer/englishSoccerReducer';
import leagueReducer from './leagueReducer/leagueReducer';
import draftTeamReducer from './draftTeamReducer/draftTeamReducer';

const rootReducer = combineReducers({
  user: userReducer,
  EPL: englishSoccerReducer,
  league: leagueReducer,
  draftTeams: draftTeamReducer
});

export default rootReducer;