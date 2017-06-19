import fetch from 'isomorphic-fetch'

export const FILTER_BY_MANUFACTURER = 'FILTER_BY_MANUFACTURER'
export const FILTER_BY_MODEL = 'FILTER_BY_MODEL'
export const FILTER_BY_PRICE_FROM = 'FILTER_BY_PRICE_FROM'
export const FILTER_BY_PRICE_TO = 'FILTER_BY_PRICE_TO'
export const FILTER_BY_YEAR_FROM = 'FILTER_BY_YEAR_FROM'
export const FILTER_BY_YEAR_TO = 'FILTER_BY_YEAR_TO'
export const FILTER_BY_TRANSMISSION = 'FILTER_BY_TRANSMISSION'
export const FILTER_BY_FUEL_TYPE = 'FILTER_BY_FUEL_TYPE'
export const FILTER_BY_KILOMETRAGE = 'FILTER_BY_KILOMETRAGE'
export const FILTER_BY_ENGINE_DISPLACEMENT = 'FILTER_BY_ENGINE_DISPLACEMENT'
export const RESET_FORM = 'RESET_FORM'
export const DISPLAY_MORE_CARS = 'DISPLAY_MORE_CARS'
export const RESET_DISPLAY_CARS = 'RESET_DISPAY_CARS'
export const RESTORE_FILTER = 'RESTORE_FILTER'
export const REQUEST_CATALOG = 'REQUEST_CATALOG'
export const RECEIVE_CATALOG = 'RECEIVE_CATALOG'

export const filterByManufacturer = (manufacturer) => {
  return {
    type: FILTER_BY_MANUFACTURER,
    manufacturer
  }
}

export const filterByModel = (model) => {
  return {
    type: FILTER_BY_MODEL,
    model
  }
}

export const filterByPriceFrom = (priceFrom) => {
  return {
    type: FILTER_BY_PRICE_FROM,
    priceFrom
  }
}

export const filterByPriceTo = (priceTo) => {
  return {
    type: FILTER_BY_PRICE_TO,
    priceTo
  }
}

export const filterByYearFrom = (yearFrom) => {
  return {
    type: FILTER_BY_YEAR_FROM,
    yearFrom
  }
}

export const filterByYearTo = (yearTo) => {
  return {
    type: FILTER_BY_YEAR_TO,
    yearTo
  }
}

export const filterByTransmission = (transmission) => {
  return {
    type: FILTER_BY_TRANSMISSION,
    transmission
  }
}

export const filterByFuelType = (fuelType) => {
  return {
    type: FILTER_BY_FUEL_TYPE,
    fuelType
  }
}

export const filterByKilometrage = (kilometrage) => {
  return {
    type: FILTER_BY_KILOMETRAGE,
    kilometrage
  }
}

export const filterByEngineDisplacement = (engineDisplacement) => {
  return {
    type: FILTER_BY_ENGINE_DISPLACEMENT,
    engineDisplacement
  }
}

export const resetForm = () => ({
  type: RESET_FORM
})

export const displayMoreCars = () => ({
  type: DISPLAY_MORE_CARS
})

export const resetDisplayCars = () => ({
  type: RESET_DISPLAY_CARS
})

export const restoreFilter = (filter) => ({
  type: RESTORE_FILTER,
  filter
})

const requestCatalog = () => ({
  type: REQUEST_CATALOG
})

const receiveCatalog = (catalog) => ({
  type: RECEIVE_CATALOG,
  catalog
})

export const getCatalog = () => {
  return dispatch => {
    dispatch(requestCatalog())
    return fetch('http://localhost:4000/catalog')
    .then(response => response.json())
    .then(json => dispatch(receiveCatalog(json)))
  }
}
