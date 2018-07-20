import { combineReducers } from 'redux';
import userReducer from './userReducer/userReducer';
import englishSoccerReducer from './englishSoccerReducer/englishSoccerReducer';

const rootReducer = combineReducers({
 user: userReducer,
 EPL: englishSoccerReducer
})

export default rootReducer