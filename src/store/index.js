import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import callAPIMiddleware from '../middleware/api'
import reducers from '../reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunk, callAPIMiddleware)
))

export default store
