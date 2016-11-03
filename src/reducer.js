import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory, hashHistory } from 'react-router'
import thunk from 'redux-thunk'
//
import { attachDispatcher } from 'jumpstate'

let userMiddleware = []

export function Middleware (...newMiddleware) {
  userMiddleware = [...userMiddleware, ...newMiddleware]
}

export let STORE

const defaultOptions = {
  devMaxHistory: 25,
  devShouldCatchErrors: true
}

export function combine (states, options = {}) {
  options = Object.assign({}, defaultOptions, options)
  const nativeMiddleware = applyMiddleware(thunk, routerMiddleware(options.useHash ? hashHistory : browserHistory), ...userMiddleware)
  const enhancers = [nativeMiddleware]

  if (process.env.NODE_ENV !== 'production') {
    const devTools = require('./devtools')
    const devToolsExtension = devTools.default.instrument({
      maxAge: options.devMaxHistory,
      shouldCatchErrors: options.devShouldCatchErrors
    })
    enhancers.push(devToolsExtension)
  }

  const enhancer = compose(...enhancers)
  const rootReducer = combineReducers(states)

  const store = createStore(rootReducer, enhancer)
  STORE = store

  attachDispatcher(store, states)

  return store
}
