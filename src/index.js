import {
  Route,
  IndexRoute,
  Redirect,
  IndexRedirect,
  Link,
  IndexLink
} from 'react-router'

import Component from './component'
import Render, { Router } from './render'
import State, { attachDispatcher, jumpstateDefaults } from 'jumpstate'
import Goto from './routing'
import { Middleware } from './reducer'

let hsr

if (process.env.NODE_ENV !== 'production') {
  hsr = require('./hsr').default
}

module.exports = {
  /* Core */
  Component,
  Router,
  Render,
  State,
  Goto,

  /* React Router */
  Route,
  IndexRoute,
  Redirect,
  IndexRedirect,
  Link,
  IndexLink,

  /* Redux */
  Middleware,

  /* Other */
  attachDispatcher,
  jumpstateDefaults,
  hsr
}
