import { combineReducers } from 'redux'
import { filter, initialFilter } from './filter'
import cars from './cars'

const rootReducer = combineReducers({
  cars,
  filter
})

export default rootReducer
