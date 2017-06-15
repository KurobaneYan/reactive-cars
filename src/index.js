import '../node_modules/grommet/grommet-hpinc.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import rootReducer from './reducers'
import cars from './cars'

const initialState = {
  cars,
  filter: {
    manufacturer: null,
    model: null,
    yearFrom: 1990,
    yearTo: 2017,
    transmission: null,
    fuelType: null,
    kilometrage: 0,
    engineDisplacement: 0,
    priceFrom: 0,
    priceTo: 1000000
  }
}

const store = createStore(rootReducer, initialState)

store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))
