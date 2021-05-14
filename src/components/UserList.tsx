import React, { useEffect } from 'react'

import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const UserList: React.FC = () => {
  const { fetchUsers } = useActions()
  const { users, loading, error } = useTypedSelector(
    ({ usersReducer }) => usersReducer
  )

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  if (loading) {
    return <h1>Loading users...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      <h2>Users</h2>
      {users.map((el) => (
        <p key={el.id}>{el.username}</p>
      ))}
    </div>
  )
}

export default UserList
