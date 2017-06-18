import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { filter } from './filter'
import cars from './cars'
import singleCar from './singleCar'

const rootReducer = combineReducers({
  cars,
  filter,
  singleCar,
  router: routerReducer
})

export default rootReducer
