/* ORIGINAL ARC VER.

import 'react-hot-loader/patch'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createHistory } from 'history'
import { Router, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from 'store/configure'

import routes from 'routes'

const baseHistory = useRouterHistory(createHistory)({ basename: process.env.PUBLIC_PATH })
const store = configureStore({}, baseHistory)
const history = syncHistoryWithStore(baseHistory, store)
const root = document.getElementById('app')

const renderApp = () => (
  <Provider store={store}>
    <Router key={Math.random()} history={history} routes={routes} />
  </Provider>
)

render(renderApp(), root)

if (module.hot) {
  module.hot.accept('routes', () => {
    require('routes')
    render(renderApp(), root)
  })
}
*/

import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'

//import './index.css'
//import 'bootstrap/dist/css/bootstrap.css'
//import App from './App'
import configureStore from './store/configure'

import {Route, Switch} from 'react-router'
//import Login from './containers/Login'
//import PrivateRoute from './containers/PrivateRoute'

const history = createHistory()
const store = configureStore(history)

ReactDOM.render((
	<Provider store={store}>
    <h1>Hello, world</h1>
	</Provider>
), document.getElementById('app'))