import appleReducer from './appleReducer';
import mangoReducer from './mangoReducer';
import orangeReducer from './orangeReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  countApple: appleReducer,
  countMango: mangoReducer,
  countOrange: orangeReducer,
});

export default allReducers;
