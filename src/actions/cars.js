import fetch from 'isomorphic-fetch'

export const REQUEST_CARS = 'REQUEST_CARS'
export const RECEIVE_CARS = 'RECEIVE_CARS'

const requestCars = () => ({
  type: REQUEST_CARS
})

const receiveCars = (cars) => ({
  type: RECEIVE_CARS,
  receivedAt: Date.now(),
  cars
})

const fetchCars = (url) => {
  return dispatch => {
    dispatch(requestCars())
    return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(receiveCars(json)))
  }
}

const shouldFetchCars = (state) => {
  if (state.cars.isFetching) {
    return false
  }
  if (typeof state.cars.receivedAt !== 'undefined') {
    const cacheTime = state.cars.receivedAt - Date.now()
    const HOUR = 36000000
    if (cacheTime > HOUR) {
      return true
    } else {
      return false
    }
  } else {
    return true
  }
}

export const fetchCarsIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchCars(getState())) {
      return dispatch(fetchCars('http://localhost:4000'))
    } else {
      return Promise.resolve()
    }
  }
}
