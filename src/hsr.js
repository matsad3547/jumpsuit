import query from 'query-string'
import Component from './component'
import { getDevToolsState, setDevToolsState } from './devtools'

const { location, history } = global

export const hsrComponent = Component({
  componentDidMount () {
    const params = query.parse(location.search)

    if (params.hsr) {
      const ts = params.hsr
      delete params.hsr

      const newParams = query.stringify(params)
      const newUrl = location.href.substring(0, location.href.indexOf('?')) +
        (newParams.length ? `?${newParams}` : '')

      history.replaceState(null, null, newUrl)

      const newState = JSON.parse(global.localStorage['jumpsuit_state_' + ts])
      setDevToolsState(newState)
      console.info('HSR data loaded')
    }

    for (var key in global.localStorage) {
      if (global.localStorage.hasOwnProperty(key)) {
        if (key.indexOf('jumpsuit_state_') > -1) {
          global.localStorage.removeItem(key)
        }
      }
    }
  },
  render () {
    return null
  }
})

export default function () {
  const ts = Date.now()
  const state = getDevToolsState()
  const params = query.parse(location.search)
  params.hsr = ts
  global.localStorage['jumpsuit_state_' + ts] = JSON.stringify(state)
  location.search = query.stringify(params)
}
