import React from 'react'
import { Render, State, Component } from 'jumpsuit'

// styles
import './styles/index.css'

// Create a state with some actions
const CounterState = State({
  // Initial State
  initial: { count: 0 },
  // Actions
  increment (state, payload) {
    return { count: ++state.count }
  },
  decrement (state, payload) {
    return { count: --state.count }
  },
})

// Create a component
const Counter = Component({
  render() {
    return (
      <div>
        <h1>Count: { this.props.counter.count }</h1>
        <button onClick={ () => CounterState.decrement() }>Decrement</button>
        <button onClick={ () => CounterState.increment() }>Increment</button>
      </div>
    )
  }

}, (state) => ({
  // Subscribe to the counter state (will be available via this.props.counter)
  counter: state.counter
}))

// Render your app!
Render({
  counter: CounterState
}, <Counter/>)
