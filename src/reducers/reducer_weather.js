import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  switch(action.type){
    case FETCH_WEATHER:
      //.concat() will return a new array containing old state and new state
      // state.concat([action.payload.data ]);
      return [ action.payload.data, ...state];
  }

  return state;
}