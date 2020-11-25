import { createStore, compose } from 'redux';
import rootReducer from './reducers/index'

export const store = compose(
  window.devToolsExtension && window.devToolsExtension(),
)(createStore)(rootReducer);