import { FavoritesActionTypes, Favorites, favoritesState } from "./types";
import { Users } from "../users/types";

import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { ApplicationState } from "../index";

export type AppThunk = ThunkAction<
  void,
  ApplicationState,
  null,
  Action<string>
>;

export const fetchFavoritesRequest: AppThunk = () => {
  return (dispatch: Dispatch, state: ApplicationState): Action => {
    try {
      return dispatch({
        type: FavoritesActionTypes.FETCH_FAVORITES_SUCCESS,
        payload: state.favorites
      });
    } catch (e) {
      return dispatch({
        type: FavoritesActionTypes.FETCH_FAVORITES_ERROR
      });
    }
  };
};

export const addToFavorites: ActionCreator<ThunkAction<
  void,
  ApplicationState,
  Users,
  Action<string>
>> = item => {
  return (dispatch: Dispatch): Action => {
    try {
      return dispatch({
        type: FavoritesActionTypes.ADD_TO_FAVORITES,
        payload: item
      });
    } catch (e) {
      return dispatch({
        type: FavoritesActionTypes.ADD_TO_FAVORITES_FAILURE,
        payload: null
      });
    }
  };
};

export const removeFromFavorites: ActionCreator<ThunkAction<
  void,
  ApplicationState,
  Users,
  Action<string>
>> = item => {
  return (dispatch: Dispatch): Action => {
    try {
      return dispatch({
        type: FavoritesActionTypes.REMOVE_FROM_FAVORITES,
        payload: item
      });
    } catch (e) {
      return dispatch({
        type: FavoritesActionTypes.REMOVE_FROM_FAVORITES_FAILURE,
        payload: null
      });
    }
  };
};