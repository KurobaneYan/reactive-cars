import '../node_modules/grommet/grommet-hpinc.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import App from './components/App'
import Admin from './components/Admin'
import rootReducer from './reducers'
import { fetchCarsIfNeeded } from './actions/async'

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(rootReducer, undefined, compose(
  applyMiddleware(middleware, thunkMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

store.dispatch(fetchCarsIfNeeded())

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/admin' component={Admin} />
        <Route path='/' component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'))
