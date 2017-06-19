import React, { Component } from 'react'
import { connect } from 'react-redux'
import Box from 'grommet/components/Box'
import Table from 'grommet/components/Table'
import TableRow from 'grommet/components/TableRow'

import './Index.css'
import CarCard from './CarCard'
import { fetchCarsIfNeeded } from '../actions/async'

class AdminIndex extends Component {
  componentDidMount () {
    this.props.fetchCars()
  }
  render () {
    const cars = this.props.cars
    .sort((a, b) => b.views - a.views)
    .slice(0, 25)
    .map((car, i) => {
      return (
        <TableRow key={car._id}>
          <td>
            {car._id}
          </td>
          <td>
            {car.manufacturer}
          </td>
          <td>
            {car.model}
          </td>
        </TableRow>
      )
    })
    return (
      <Box id='carCards'>
        <Table>
          <thead>
            <tr>
              <th>
                Id
              </th>
              <th>
                Manufacturer
              </th>
              <th>
                Model
              </th>
            </tr>
          </thead>
          <tbody>
            {cars}
          </tbody>
        </Table>
      </Box>
    )
  }
}

const mapStateToProps = (state) => ({
  cars: state.cars.items
})

const mapDispatchToProps = (dispatch) => ({
  fetchCars: () => {
    dispatch(fetchCarsIfNeeded())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminIndex)
