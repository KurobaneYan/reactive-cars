import * as ActionTypes from '../actions'

export const initialFilter = {
  manufacturer: null,
  model: null,
  yearFrom: 1990,
  yearTo: 2017,
  transmission: null,
  fuelType: null,
  kilometrage: 0,
  engineDisplacement: 0,
  priceFrom: 0,
  priceTo: 1000000
}

export const filter = (state = initialFilter, action) => {
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
    case ActionTypes.FILTER_BY_TRANSMISSION:
      return Object.assign({}, state, {transmission: action.transmission})
    case ActionTypes.FILTER_BY_FUEL_TYPE:
      return Object.assign({}, state, {fuelType: action.fuelType})
    case ActionTypes.FILTER_BY_KILOMETRAGE:
      return Object.assign({}, state, {kilometrage: action.kilometrage})
    case ActionTypes.FILTER_BY_ENGINE_DISPLACEMENT:
      return Object.assign(
        {},
        state,
        {engineDisplacement: action.engineDisplacement})
    case ActionTypes.RESET_FORM:
      return Object.assign({}, state, initialFilter)
    default:
      return state
  }
}
