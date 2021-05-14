import axios from 'axios'
import { Dispatch } from 'react'
import { UsersActions, UsersActionType } from '../../types/users'

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UsersActions>) => {
    try {
      dispatch({ type: UsersActionType.FETCH_USERS })
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )
      dispatch({
        type: UsersActionType.FETCH_USERS_SUCCESS,
        payload: response.data,
      })
    } catch (e) {
      dispatch({
        type: UsersActionType.FETCH_USERS_ERROR,
        payload: 'Failed fetch users',
      })
    }
  }
}
