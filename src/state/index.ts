import { combineReducers } from 'redux';
import auth from './auth/reducer';
import programmer from './programmer/reducer';
import { ProgrammerState } from './programmer/types';
import { AuthState } from './auth/types';
import DogTinder from './dog/reducer';
import { DogState, Dog } from './dog/types';

export interface AppState {
  auth: AuthState;
  programmer: ProgrammerState;
  DogTinder: DogState
}
const rootReducer = combineReducers<AppState>({
  auth,
  DogTinder,
  programmer,
});
export default rootReducer;
