import {
  GET_INFO,
} from '../types/photo';

import { mainInfoAPI } from 'api/api';

export const getInfo = data => ({ type: GET_INFO, data });

export const addPhoto = data => async dispatch => {
  const info = await mainInfoAPI.getInfo(data);
  dispatch(getInfo(info));
};
