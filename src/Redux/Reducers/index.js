import { combineReducers } from 'redux';
import { All_Reducers } from './All_reducers';

const rootReducers = combineReducers({
  All_Data: All_Reducers,
});

export default rootReducers;
