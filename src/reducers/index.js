import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import filter from './filter'
import cars from './cars'
import singleCar from './singleCar'
import catalog from './catalog'
import admin from './admin'

const rootReducer = combineReducers({
  cars,
  filter,
  catalog,
  singleCar,
  admin,
  router: routerReducer
})

export default rootReducer
