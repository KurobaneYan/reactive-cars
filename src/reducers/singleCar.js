import {
  REQUEST_SINGLE_CAR,
  RECEIVE_SINGLE_CAR,
  RESET_SINGLE_CAR
} from '../actions/async'

const initialState = { data: {}, isFetching: false }

const singleCar = (state = initialState, action) => {
  switch (action.type) {
    case RESET_SINGLE_CAR:
      return Object.assign({}, state, initialState)
    case REQUEST_SINGLE_CAR:
      return Object.assign({}, state, { isFetching: true })
    case RECEIVE_SINGLE_CAR:
      return Object.assign({}, state, { data: action.car, isFetching: false })
    default:
      return state
  }
}

export default singleCar
