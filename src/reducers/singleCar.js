import * as ActionTypes from '../actions/singleCar'

const initialState = {}

const singleCar = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.RESET_SINGLE_CAR:
      return {}
    case ActionTypes.REQUEST_SINGLE_CAR:
      return Object.assign({}, { ...state, isFetching: true })
    case ActionTypes.RECEIVE_SINGLE_CAR:
      return Object.assign({}, { ...state, isFetching: false }, action.car)
    case ActionTypes.SET_MANUFACTURER:
      return Object.assign({}, { ...state, manufacturer: action.manufacturer })
    case ActionTypes.SET_MODEL:
      return Object.assign({}, { ...state, model: action.model })
    case ActionTypes.SET_YEAR:
      return Object.assign({}, { ...state, year: action.year })
    case ActionTypes.SET_KILOMETRAGE:
      return Object.assign({}, { ...state, kilometrage: action.kilometrage })
    case ActionTypes.SET_VIEWS:
      return Object.assign({}, { ...state, views: action.views })
    case ActionTypes.SET_FUEL_TYPE:
      return Object.assign({}, { ...state, fuelType: action.fuelType })
    case ActionTypes.SET_ENGINE_DISPLACEMENT:
      return Object.assign({}, {
        ...state,
        engineDisplacement: action.engineDisplacement
      })
    case ActionTypes.SET_TRANSMISSION_TYPE:
      return Object.assign({}, {
        ...state,
        transmissionType: action.transmissionType
      })
    case ActionTypes.SET_PRICE:
      return Object.assign({}, { ...state, price: action.price })
    case ActionTypes.ADD_PHOTO: {
      let photos = state.photos.slice(0, state.photos.length)
      photos.push(action.photo)
      return Object.assign({}, { ...state, photos })
    }
    case ActionTypes.REMOVE_PHOTO: {
      const photos = state.photos.slice(0, state.photos.length - 1)
      return Object.assign({}, { ...state, photos })
    }
    default:
      return state
  }
}

export default singleCar
