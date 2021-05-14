import {
  UsersActions,
  UsersActionType,
  UsersState,
} from '../../types/users'

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
}

export const usersReducer = (
  state = initialState,
  action: UsersActions
): UsersState => {
  switch (action.type) {
    case UsersActionType.FETCH_USERS:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case UsersActionType.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      }
    case UsersActionType.FETCH_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
