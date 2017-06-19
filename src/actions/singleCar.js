import fetch from 'isomorphic-fetch'

export const REQUEST_SINGLE_CAR = 'REQUEST_SINGLE_CAR'
export const RECEIVE_SINGLE_CAR = 'RECEIVE_SINGLE_CAR'
export const RESET_SINGLE_CAR = 'RESET_SINGLE_CAR'

const requestCar = () => ({
  type: REQUEST_SINGLE_CAR
})

const receiveCar = (car) => ({
  type: RECEIVE_SINGLE_CAR,
  car
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
