import { fromJS } from 'immutable';

import {
} from './constants';

const initialState = fromJS({
});

function createGridReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default createGridReducer;