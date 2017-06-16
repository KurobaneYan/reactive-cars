import { filter, initialFilter } from './filter'
import cars from '../cars'

const initialState = {
  cars,
  filter: initialFilter
}

const rootReducer = (state = initialState, action) => {
  return {
    cars: state.cars.slice(),
    filter: filter(state.filter, action)
  }
}

export default rootReducer
