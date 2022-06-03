export interface Users {
  id: string;
  name: string;
  email: string;
  image: string;
  jobs?: string;
  currentUser: number;
}

export enum UsersActionTypes {
  FETCH_REQUEST = "@@users/FETCH_REQUEST",
  FETCH_SUCCESS = "@@users/FETCH_SUCCESS",
  FETCH_ERROR = "@@users/FETCH_ERROR"
}

export interface UsersState {
  readonly loading: boolean;
  readonly data: Users[];
  readonly errors?: string;
}
