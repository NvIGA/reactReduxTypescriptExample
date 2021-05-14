export enum UsersActionType {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export interface UsersState {
  users: Array<IUser>
  loading: boolean
  error: null | string
}

export interface FetchUsersAction {
  type: UsersActionType.FETCH_USERS
}

export interface FetchUsersSuccessAction {
  type: UsersActionType.FETCH_USERS_SUCCESS
  payload: Array<IUser>
}

export interface FetchUsersErrorAction {
  type: UsersActionType.FETCH_USERS_ERROR
  payload: string
}

export type UsersActions =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction

export interface IUser {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: 'Multi-layered client-server neural-net'
    bs: 'harness real-time e-markets'
  }
}
