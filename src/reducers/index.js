import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { filter } from './filter'
import cars from './cars'

const rootReducer = combineReducers({
  cars,
  filter,
  router: routerReducer
})

export default rootReducer
