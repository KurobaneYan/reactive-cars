import fetch from 'isomorphic-fetch'

import { fetchCars } from './cars'

export const REQUEST_DELETE_CAR = 'REQUEST_DELETE_CAR'
export const RECEIVE_DELETE_CAR = 'RECEIVE_DELETE_CAR'
export const FAILED_TO_DELETE_CAR = 'FAILED_TO_DELETE_CAR'

const requestDeleteCar = (id) => ({
  type: REQUEST_DELETE_CAR,
  id
})

const receiveDeleteCar = (id, data) => ({
  type: RECEIVE_DELETE_CAR,
  id,
  data
})

const failedToDeleteCar = (error) => ({
  type: FAILED_TO_DELETE_CAR,
  error
})

const deleteCar = (id) => {
  return dispatch => {
    dispatch(requestDeleteCar(id))
    return fetch('http://localhost:4000/delete/' + id, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(json => dispatch(receiveDeleteCar(id, json)))
    .then(() => dispatch(fetchCars('http://localhost:4000')))
    .catch(error => dispatch(failedToDeleteCar(error)))
  }
}

export default deleteCar
