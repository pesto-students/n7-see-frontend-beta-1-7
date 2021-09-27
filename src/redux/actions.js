import { types } from './types';

export function fetchData() {
  return {
    type: types.SEND_REQUEST,
  };
}

export const fetchDataSuccess = (user) => ({
  type: types.SEND_REQUEST_SUCCESS,
  payload: user
});

export const fetchDataFailure = (error) => ({
  type: types.SEND_REQUEST_FAILURE,
  payload: {},
  error
});

export function fetchHomeData() {
  return {
    type: types.SEND_HOMEPAGE_REQUEST,
  };
}

export const fetchHomeDataSuccess = (data) => ({
  type: types.SEND_HOMEPAGE_REQUEST_SUCCESS,
  payload: data
});

export const fetchHomeDataFailure = (error) => ({
  type: types.SEND_HOMEPAGE_REQUEST_FAILURE,
  payload: {},
  error
});
