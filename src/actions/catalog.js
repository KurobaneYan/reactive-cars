import fetch from 'isomorphic-fetch'

export const REQUEST_CATALOG = 'REQUEST_CATALOG'
export const RECEIVE_CATALOG = 'RECEIVE_CATALOG'

const requestCatalog = () => ({
  type: REQUEST_CATALOG
})

const receiveCatalog = (catalog) => ({
  type: RECEIVE_CATALOG,
  catalog
})

const getCatalog = () => {
  return dispatch => {
    dispatch(requestCatalog())
    return fetch('http://localhost:4000/catalog')
    .then(response => response.json())
    .then(json => dispatch(receiveCatalog(json)))
  }
}

export default getCatalog
