import React from 'react'
import { Component } from 'jumpsuit'
//
import Todos from '../state/todos'
import TodoList from '../components/todoList'

export default Component({
  render(){
    return <TodoList todos={this.props.todos} toggleTodo={Todos.toggle}/>
  }
}, state => {
  return {
    todos: getVisibleTodos(state.todos.all, state.todos.visibility)
  }
})

function getVisibleTodos(todos, filter){
  switch (filter) {
    case 'all':
      return todos
    case 'completed':
      return todos.filter(t => t.completed)
    case 'active':
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}
