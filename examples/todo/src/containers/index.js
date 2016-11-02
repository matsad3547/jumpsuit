import React from 'react'

import Visibility from '../containers/visibility'
import Todos from '../containers/todos'
import AddTodo from '../containers/addTodo'

export default () => (
  <div className="App">
    <Visibility />
    <br/>
    <Todos />
    <br/>
    <AddTodo />
  </div>
)
