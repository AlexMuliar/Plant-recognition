import {
  GET_INFO,
} from '../types/photo';

const initialState = {
  data: [],
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFO:
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
};

export default photoReducer;
