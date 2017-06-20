import * as ActionTypes from '../actions/admin'

export const initialState = {
  isPerformingActon: false,
  id: {},
  data: {},
  error: {},
  isFilterVisible: false
}

const admin = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_DELETE_CAR:
      return Object.assign({}, state, {isPerformingActon: true, id: action.id})
    case ActionTypes.RECEIVE_DELETE_CAR:
      return Object.assign({}, state, {
        id: action.id,
        data: action.data,
        isPerformingActon: false
      })
    case ActionTypes.FAILED_TO_DELETE_CAR:
      return Object.assign({}, state, {
        error: action.error,
        isPerformingActon: false
      })
    case ActionTypes.REQUEST_UPDATE_CAR:
      return Object.assign({}, state, {isPerformingActon: true, id: action.id})
    case ActionTypes.RECEIVE_UPDATE_CAR:
      return Object.assign({}, state, {
        id: action.id,
        data: action.data,
        isPerformingActon: false
      })
    case ActionTypes.FAILED_TO_UPDATE_CAR:
      return Object.assign({}, state, {
        error: action.error,
        isPerformingActon: false
      })
    case ActionTypes.SHOW_FILTER:
      return Object.assign({}, { ...state, isFilterVisible: true })
    case ActionTypes.HIDE_FILTER:
      return Object.assign({}, { ...state, isFilterVisible: false })
    default:
      return state
  }
}

export default admin
