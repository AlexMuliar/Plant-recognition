import { SET_MAIN_INFO, TOGGLE_IS_LOADING } from 'redux/types/mainInfo';

import { mainInfoAPI } from '../../api/api';

export const setStaff = data => ({ type: SET_MAIN_INFO, data });
export const toggleIsLoading = isLoading => ({ type: TOGGLE_IS_LOADING, isLoading });

export const getMainInfo = () => {
  return async dispatch => {
    dispatch(toggleIsLoading(true));
    try {
      const data = await mainInfoAPI.getMainInfo();
      dispatch(toggleIsLoading(false));
      dispatch(setStaff(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateMainInfo = (_id, newData) => async dispatch => {
  dispatch(toggleIsLoading(true));
  await mainInfoAPI.editMainInfo(_id, newData);
  const data = await mainInfoAPI.getMainInfo();
  dispatch(toggleIsLoading(false));
  dispatch(setStaff(data));
};

export const addMainInfo = newMainInfo => async dispatch => {
  dispatch(toggleIsLoading(true));
  await mainInfoAPI.addMainInfo(newMainInfo);
  const data = await mainInfoAPI.getMainInfo();
  dispatch(toggleIsLoading(false));
  dispatch(setStaff(data));
};

export const deletMainInfo = _id => async dispatch => {
  dispatch(toggleIsLoading(true));
  await mainInfoAPI.deleteMainInfo(_id);
  const data = await mainInfoAPI.getMainInfo();
  dispatch(toggleIsLoading(false));
  dispatch(setStaff(data));
};
