import { createStore } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import favoriteReducer from './Reducers/favReducer';
import reducers from './Reducers/combineReducers';



const myStore = createStore(reducers)
export default myStore;