import {
  TodosActions,
  TodosActionType,
  TodosState,
} from '../../types/todo'

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
}

export const todoReducer = (
  state: TodosState = initialState,
  action: TodosActions
): TodosState => {
  switch (action.type) {
    case TodosActionType.FETCH_TODOS:
      return { ...state, loading: true, error: null }
    case TodosActionType.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
        error: null,
      }
    case TodosActionType.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload }
    case TodosActionType.SET_TODO_PAGE:
      return { ...state, page: action.payload }

    default:
      return state
  }
}
