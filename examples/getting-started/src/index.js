import React from 'react'
import { Render, Router, Route, IndexRoute } from 'jumpsuit'
/* state */
import state from './state/index'
/* screens */
import App from './screens/index'
import Github from './screens/github'
/* styles */
import './styles/index.css'

Render(state, (
  <Router>
    <Route path='/' component={App}>
      <IndexRoute component={Github} />
    </Route>
  </Router>
))
