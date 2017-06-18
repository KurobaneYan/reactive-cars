import fetch from 'isomorphic-fetch'

export const REQUEST_CARS = 'REQUEST_CARS'
export const RECEIVE_CARS = 'RECEIVE_CARS'

const requestCars = () => ({
  type: REQUEST_CARS
})

const receiveCars = (cars) => ({
  type: RECEIVE_CARS,
  cars: cars,
  receivedAt: Date.now()
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

export const REQUEST_SINGLE_CAR = 'REQUEST_SINGLE_CAR'
export const RECEIVE_SINGLE_CAR = 'RECEIVE_SINGLE_CAR'
export const RESET_SINGLE_CAR = 'RESET_SINGLE_CAR'

const requestCar = () => ({
  type: REQUEST_SINGLE_CAR
})

const receiveCar = (car) => ({
  type: RECEIVE_SINGLE_CAR,
  car: car
})

export const showCar = (id) => {
  return dispatch => {
    dispatch(requestCar())
    return fetch('http://localhost:4000/show/' + id)
    .then(response => response.json())
    .then(json => dispatch(receiveCar(json)))
  }
}

export const resetCar = () => ({
  type: RESET_SINGLE_CAR
})
