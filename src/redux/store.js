import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunkux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './rootReducer';



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))



export default store 