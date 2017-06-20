import fetch from 'isomorphic-fetch'

export const REQUEST_SINGLE_CAR = 'REQUEST_SINGLE_CAR'
export const RECEIVE_SINGLE_CAR = 'RECEIVE_SINGLE_CAR'
export const RESET_SINGLE_CAR = 'RESET_SINGLE_CAR'
export const SET_MANUFACTURER = 'SET_MANUFACTURER'
export const SET_MODEL = 'SET_MODEL'
export const SET_YEAR = 'SET_YEAR'
export const SET_KILOMETRAGE = 'SET_KILOMETRAGE'
export const SET_VIEWS = 'SET_VIEWS'
export const SET_FUEL_TYPE = 'SET_FUEL_TYPE'
export const SET_ENGINE_DISPLACEMENT = 'SET_ENGINE_DISPLACEMENT'
export const SET_TRANSMISSION_TYPE = 'SET_TRANSMISSION_TYPE'
export const SET_PRICE = 'SET_PRICE'
export const ADD_PHOTO = 'ADD_PHOTO'
export const REMOVE_PHOTO = 'REMOVE_PHOTO'

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

export const readCar = (id) => {
  return dispatch => {
    dispatch(requestCar())
    return fetch('http://localhost:4000/read/' + id)
    .then(response => response.json())
    .then(json => dispatch(receiveCar(json)))
  }
}

export const resetCar = () => ({
  type: RESET_SINGLE_CAR
})

export const setManufacturer = (manufacturer) => ({
  type: SET_MANUFACTURER,
  manufacturer
})

export const setModel = (model) => ({
  type: SET_MODEL,
  model
})

export const setYear = (year) => ({
  type: SET_YEAR,
  year
})

export const setKilometrage = (kilometrage) => ({
  type: SET_KILOMETRAGE,
  kilometrage
})

export const setViews = (views) => ({
  type: SET_VIEWS,
  views
})

export const setFuelType = (fuelType) => ({
  type: SET_FUEL_TYPE,
  fuelType
})

export const setEngineDisplacement = (engineDisplacement) => ({
  type: SET_ENGINE_DISPLACEMENT,
  engineDisplacement
})

export const setTransmissionType = (transmissionType) => ({
  type: SET_TRANSMISSION_TYPE,
  transmissionType
})

export const setPrice = (price) => ({
  type: SET_PRICE,
  price
})

export const addPhoto = (photo) => ({
  type: ADD_PHOTO,
  photo
})

export const removePhoto = (photo) => ({
  type: REMOVE_PHOTO,
  photo
})
