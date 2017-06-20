import fetch from 'isomorphic-fetch'
import axios from 'axios'

import { fetchCars } from './cars'

export const REQUEST_DELETE_CAR = 'REQUEST_DELETE_CAR'
export const RECEIVE_DELETE_CAR = 'RECEIVE_DELETE_CAR'
export const FAILED_TO_DELETE_CAR = 'FAILED_TO_DELETE_CAR'
export const REQUEST_UPDATE_CAR = 'REQUEST_UPDATE_CAR'
export const RECEIVE_UPDATE_CAR = 'RECEIVE_UPDATE_CAR'
export const FAILED_TO_UPDATE_CAR = 'FAILED_TO_UPDATE_CAR'
export const SHOW_FILTER = 'SHOW_FILTER'
export const HIDE_FILTER = 'HIDE_FILTER'
export const REQUEST_CREATE_CAR = 'REQUEST_CREATE_CAR'
export const RECEIVE_CREATE_CAR = 'RECEIVE_CREATE_CAR'
export const FAILED_TO_CREATE_CAR = 'FAILED_TO_CREATE_CAR'

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

export const deleteCar = (id) => {
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

const requestUpdateCar = (id) => ({
  type: REQUEST_UPDATE_CAR,
  id
})

const receiveUpdateCar = (id, data) => ({
  type: RECEIVE_UPDATE_CAR,
  id,
  data
})

const failedToUpdateCar = (error) => ({
  type: FAILED_TO_UPDATE_CAR,
  error
})

export const updateCar = (id, car) => {
  return dispatch => {
    dispatch(requestUpdateCar(id))
    return axios.put('http://localhost:4000/update/' + id, car)
    .then(response => response.json())
    .then(json => dispatch(receiveUpdateCar(id, json)))
    .catch(error => dispatch(failedToUpdateCar(error)))
  }
}

export const showFilter = () => ({
  type: SHOW_FILTER
})

export const hideFilter = () => ({
  type: HIDE_FILTER
})

const requestCreateCar = () => ({
  type: REQUEST_CREATE_CAR
})

const receiveCreateCar = (data) => ({
  type: RECEIVE_CREATE_CAR,
  data
})

const failedToCreateCar = (error) => ({
  type: FAILED_TO_CREATE_CAR,
  error
})

export const createCar = (car) => {
  return dispatch => {
    dispatch(requestCreateCar())
    return axios.post('http://localhost:4000/create', car)
    .then(response => response.json())
    .then(json => dispatch(receiveCreateCar(json)))
    .catch(error => dispatch(failedToCreateCar(error)))
  }
}
