import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  test: function test(state = {}) {
    return {
      ...state,
      click: 'click' in state ? state.click + 1 : 0
    };
  }
});

export default rootReducer;
