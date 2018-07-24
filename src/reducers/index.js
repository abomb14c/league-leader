import { combineReducers } from 'redux';
import userReducer from './userReducer/userReducer';
import englishSoccerReducer from './englishSoccerReducer/englishSoccerReducer';
import leagueReducer from './leagueReducer/leagueReducer';

const rootReducer = combineReducers({
 user: userReducer,
 EPL: englishSoccerReducer,
 league: leagueReducer
})

export default rootReducer