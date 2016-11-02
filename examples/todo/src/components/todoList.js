import React from 'react'

import Todo from './todo'

export default ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={e => toggleTodo(todo.id)}
      />
    )}
  </ul>
)
