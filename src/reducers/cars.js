import { REQUEST_CARS, RECEIVE_CARS } from '../actions/cars'

const initialState = { items: [], isFetching: false }

const cars = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CARS:
      return Object.assign({}, state, {isFetching: true})
    case RECEIVE_CARS:
      return Object.assign({}, state, {
        items: action.cars,
        isFetching: false,
        receivedAt: action.receivedAt
      })
    default:
      return state
  }
}

export default cars
