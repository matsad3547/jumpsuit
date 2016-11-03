import './app'

if (module.hot) {
  module.hot.accept('./app', () => {
    require('jumpsuit').hsr()
  })
}
