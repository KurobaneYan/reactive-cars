export const CARS_REQUEST = 'CARS_REQUEST'
export const CARS_SUCCESS = 'CARS_SUCCESS'
export const CARS_FAILURE = 'CARS_FAILURE'
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

export const resetForm = () => {
  return {
    type: RESET_FORM
  }
}
