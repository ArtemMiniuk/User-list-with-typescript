import { Reducer } from "redux";

import { FavoritesActionTypes, favoritesState } from "./types";
export const initialState: favoritesState = {
  data: {
    id: 0,
    items: []
  },
  errors: undefined,
  loading: false
};

const reducer: Reducer<favoritesState> = (state = initialState, action) => {
  switch (action.type) {
    case FavoritesActionTypes.FETCH_FAVORITES_REQUEST: {
      return { ...state, loading: true };
    }
    case FavoritesActionTypes.FETCH_FAVORITES_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case FavoritesActionTypes.FETCH_FAVORITES_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    case FavoritesActionTypes.ADD_TO_FAVORITES: {
      return {
        errors: state.errors,
        loading: state.loading,
        data: {
          ...state.data,
          id: state.data.id,
          items: [...state.data.items, action.payload]
        }
      };
    }
    case FavoritesActionTypes.REMOVE_FROM_FAVORITES: {
      return {
        errors: state.errors,
        loading: state.loading,
        data: {
          ...state.data,
          id: state.data.id,
          items: state.data.items.filter(item => item !== action.payload.id)
        }
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as favoritesReducer };
