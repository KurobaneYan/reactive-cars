import * as ActionTypes from '../actions/catalog'

const initialFilter = {
  catalogIsFetching: false,
  data: {}
}

const catalog = (state = initialFilter, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_CATALOG:
      return Object.assign({}, state, { catalogIsFetching: true })
    case ActionTypes.RECEIVE_CATALOG:
      return Object.assign({}, state, {
        data: action.catalog,
        catalogIsFetching: false
      })
    default:
      return state
  }
}

export default catalog
