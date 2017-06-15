export const CARS_REQUEST = 'CARS_REQUEST'
export const CARS_SUCCESS = 'CARS_SUCCESS'
export const CARS_FAILURE = 'CARS_FAILURE'
export const FILTER_BY_MANUFACTURER = 'FILTER_BY_MANUFACTURER'
export const FILTER_BY_MODEL = 'FILTER_BY_MODEL'
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

export const resetForm = () => {
  return {
    type: RESET_FORM
  }
}
