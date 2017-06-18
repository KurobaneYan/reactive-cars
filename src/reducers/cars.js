import carsArray from '../cars'

const initialState = { items: carsArray, isFetching: false }

const cars = (state = initialState, action) => state

export default cars
