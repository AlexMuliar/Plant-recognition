import { combineReducers } from 'redux';
import photoReducer from './photoReducer';
//import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  //form: formReducer,
  photo: photoReducer,
});

export default reducers;
