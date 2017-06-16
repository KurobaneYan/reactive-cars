import * as ActionTypes from '../actions'

const resetFilter = {
  manufacturer: null,
  model: null,
  yearFrom: 1990,
  yearTo: 2017,
  transmission: null,
  kilometrage: 0,
  engineDisplacement: 0,
  priceFrom: 0,
  priceTo: 1000000
}

const filter = (state = {}, action) => {
  console.log('action', action)
  switch (action.type) {
    case ActionTypes.FILTER_BY_MANUFACTURER:
      return Object.assign({}, state, {manufacturer: action.manufacturer})
    case ActionTypes.FILTER_BY_MODEL:
      return Object.assign({}, state, {model: action.model})
    case ActionTypes.FILTER_BY_PRICE_FROM:
      return Object.assign({}, state, {priceFrom: action.priceFrom})
    case ActionTypes.FILTER_BY_PRICE_TO:
      return Object.assign({}, state, {priceTo: action.priceTo})
    case ActionTypes.FILTER_BY_YEAR_FROM:
      return Object.assign({}, state, {yearFrom: action.yearFrom})
    case ActionTypes.FILTER_BY_YEAR_TO:
      return Object.assign({}, state, {yearTo: action.yearTo})
    case ActionTypes.RESET_FORM:
      return Object.assign({}, state, resetFilter)
    default:
      return state
  }
}

const rootReducer = (state = {}, action) => {
  return {
    cars: state.cars.slice(),
    filter: filter(state.filter, action)
  }
}

export default rootReducer
