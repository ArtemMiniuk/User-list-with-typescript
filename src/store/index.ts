import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";


import { UsersReducer } from "./users/reducer";
import { UsersState } from "./users/types";


import { favoritesReducer } from "./favorites/reducer";
import { favoritesState } from "./favorites/types";
import { RouterState } from "connected-react-router";

export interface ApplicationState {
  favorites: favoritesState;
  users: UsersState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    favorites: favoritesReducer,
    users: UsersReducer,
    router: connectRouter(history)
  });
