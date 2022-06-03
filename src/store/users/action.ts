import { UsersActionTypes } from "./types";

import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { ApplicationState } from "../index";
import users from "../../mockdata";

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const fetchRequest: AppThunk = () => {
  return (dispatch: Dispatch): Action => {
    try {
      return dispatch({
        type: UsersActionTypes.FETCH_SUCCESS,
        payload: users
      });
    } catch (e) {
      return dispatch({
        type: UsersActionTypes.FETCH_ERROR
      });
    }
  };
};
