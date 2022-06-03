import { Reducer } from "redux";
import { UsersActionTypes, UsersState } from "./types";

export const initialState: UsersState = {
  data: [],
  errors: undefined,
  loading: false
};

const reducer: Reducer<UsersState> = (state = initialState, action) => {
  switch (action.type) {
    case UsersActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case UsersActionTypes.FETCH_SUCCESS: {
      console.log("action payload", action.payload);
      return { ...state, loading: false, data: action.payload };
    }
    case UsersActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as UsersReducer };
