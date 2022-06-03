import { Users } from "../users/types";

export interface Favorites {
  id: number;
  items: Users[];
}

export enum FavoritesActionTypes {
  ADD_TO_FAVORITES = "@@favorites/ADD_TO_favorites",
  ADD_TO_FAVORITES_FAILURE = "@@favorites/ADD_TO_FAVORITES_FAILURE",
  REMOVE_FROM_FAVORITES = "@@favorites/REMOVE_FROM_FAVORITES",
  REMOVE_FROM_FAVORITES_FAILURE = "@@favorites/ADD_TO_FAVORITES_FAILURE",
  FETCH_FAVORITES_REQUEST = "@@favorites/FETCH_FAVORITES_REQUEST",
  FETCH_FAVORITES_SUCCESS = "@@favorites/FETCH_FAVORITES_SUCCESS",
  FETCH_FAVORITES_ERROR = "@@favorites/FETCH_FAVORITES_ERROR"
}

export interface favoritesState {
  readonly loading: boolean;
  readonly data: Favorites;
  readonly errors?: string;
}
