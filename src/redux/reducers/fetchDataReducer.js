import { types } from '../types';

const initialState = {
  loading: true,
  user: {},
  error: {},
  data: {}
};

const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEND_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.SEND_REQUEST_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loading: true,
        user: action.payload,
        error: {}
      };
    case types.SEND_REQUEST_FAILURE:
      return {
        ...state,
        loading: true,
        user: {},
        error: action.error
      };
    case types.SEND_HOMEPAGE_REQUEST:
      console.log('actiongiven request');
      return {
        ...state,
        loading: true
      };
    case types.SEND_HOMEPAGE_REQUEST_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: {}
      };
    case types.SEND_HOMEPAGE_REQUEST_FAILURE:
      console.log('action');
      return {
        ...state,
        loading: false,
        data: {},
        error: action.error
      };
    default: return {
      state
    };
  }
};

export default fetchDataReducer;
