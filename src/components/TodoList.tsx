import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const TodoList: React.FC = () => {
  const { todos, page, limit, loading, error } =
    useTypedSelector(({ todoReducer }) => todoReducer)

  const { fetchTodos } = useActions()

  useEffect(() => {
    fetchTodos(page, limit)
  }, [page, limit, fetchTodos])

  if (loading) {
    return <h1>Loading todos...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      <h2>Todos</h2>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  )
}

export default TodoList
