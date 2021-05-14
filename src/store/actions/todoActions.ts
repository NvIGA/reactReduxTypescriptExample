import axios from 'axios'
import { Dispatch } from 'react'
import { TodosActions, TodosActionType } from '../../types/todo'

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodosActions>) => {
    try {
      dispatch({ type: TodosActionType.FETCH_TODOS })
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
        {
          params: { _page: page, _limit: limit },
        }
      )
      dispatch({
        type: TodosActionType.FETCH_TODOS_SUCCESS,
        payload: response.data,
      })
    } catch (e) {
      dispatch({
        type: TodosActionType.FETCH_TODOS_ERROR,
        payload: 'Failed fetch todo',
      })
    }
  }
}

export function setTodoPage(page: number = 1): TodosActions {
  return { type: TodosActionType.SET_TODO_PAGE, payload: page }
}
