import * as ActionTypes from '../actions/filter'

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
  priceTo: 1000000,
  displayCars: 10,
  catalogIsFetching: false,
  catalog: {}
}

export const filter = (state = initialFilter, action) => {
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
      return Object.assign({}, state, {
        engineDisplacement: action.engineDisplacement
      })
    case ActionTypes.REQUEST_CATALOG:
      return Object.assign({}, state, {catalogIsFetching: true})
    case ActionTypes.RECEIVE_CATALOG:
      return Object.assign({}, state, {
        catalog: action.catalog,
        catalogIsFetching: false
      })
    case ActionTypes.RESET_FORM:
      return Object.assign({}, state, initialFilter, {catalog: state.catalog})
    case ActionTypes.DISPLAY_MORE_CARS:
      return Object.assign({}, state, {displayCars: state.displayCars + 10})
    case ActionTypes.RESET_DISPLAY_CARS:
      return Object.assign({}, state, {displayCars: initialFilter.displayCars})
    case ActionTypes.RESTORE_FILTER:
      return Object.assign({}, state, action.filter)
    default:
      return state
  }
}
