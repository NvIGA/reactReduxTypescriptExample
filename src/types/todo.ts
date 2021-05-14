export interface TodosState {
  todos: Array<Todo>
  loading: boolean
  error: string | null
  page: number
  limit: number
}

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export enum TodosActionType {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
  SET_TODO_PAGE = 'SET_TODO_PAGE',
}

interface FetchTodoAction {
  type: TodosActionType.FETCH_TODOS
}

interface FetchTodoActionSuccess {
  type: TodosActionType.FETCH_TODOS_SUCCESS
  payload: Array<Todo>
}

interface FetchTodoActionError {
  type: TodosActionType.FETCH_TODOS_ERROR
  payload: string
}

interface SetPageNumberTodoAction {
  type: TodosActionType.SET_TODO_PAGE
  payload: number
}

export type TodosActions =
  | FetchTodoAction
  | FetchTodoActionSuccess
  | FetchTodoActionError
  | SetPageNumberTodoAction
