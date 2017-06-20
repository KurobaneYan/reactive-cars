import React, { Component } from 'react'
import { connect } from 'react-redux'
import Table from 'grommet/components/Table'
import TableHeader from 'grommet/components/TableHeader'

import FilteredCar from './FilteredCar'
import { displayMoreCars, resetDisplayCars } from '../../actions/filter'

class FilteredCarsList extends Component {
  componentWillUnmount () {
    this.props.resetDisplayCars()
  }
  render () {
    const filter = this.props.filter
    let cars = this.props.cars
    .sort((a, b) => b.views - a.views)
    .filter(car => {
      if (filter.manufacturer) {
        if (car.manufacturer === filter.manufacturer) {
          return true
        }
        return false
      }
      return true
    })
    .filter(car => {
      if (filter.model) {
        if (car.model === filter.model) {
          return true
        }
        return false
      }
      return true
    })
    .filter(car => {
      if (filter.transmission) {
        if (car.transmissionType === filter.transmission) {
          return true
        }
        return false
      }
      return true
    })
    .filter(car => {
      if (filter.fuelType) {
        if (car.fuelType === filter.fuelType) {
          return true
        }
        return false
      }
      return true
    })
    .filter(car => {
      if (filter.yearFrom && filter.yearTo) {
        if ((filter.yearFrom <= car.year) && (filter.yearTo >= car.year)) {
          return true
        }
        return false
      }
      return true
    })
    .filter(car => {
      if ((filter.priceFrom <= car.price) && (filter.priceTo >= car.price)) {
        return true
      }
      return false
    })
    .filter(car => {
      if (filter.kilometrage !== '') {
        if (filter.kilometrage === 0) {
          return true
        }
        if (filter.kilometrage >= car.kilometrage) {
          return true
        }
        return false
      }
      return true
    })
    .filter(car => {
      if (filter.engineDisplacement !== '') {
        if (filter.engineDisplacement === 0) {
          return true
        }
        if (filter.engineDisplacement === car.engineDisplacement) {
          return true
        }
        return false
      }
      return true
    })

    const carsLength = cars.length

    cars = cars.slice(0, filter.displayCars)
    .map((car, i) => {
      return <FilteredCar key={car._id} car={car} />
    })

    const headerFields = [
      'Photo',
      'Manufacturer',
      'Model',
      'Views',
      'Kilometrage',
      'Engine displacement',
      'Year',
      'Fuel type',
      'Transmission',
      'Price',
      'Delete'
    ]

    if (filter.displayCars < carsLength) {
      return (
        <Table onMore={this.props.displayMore} responsive={false} selectable>
          <TableHeader labels={headerFields} />
          <tbody>
            {cars}
          </tbody>
        </Table>
      )
    } else {
      return (
        <Table responsive={false} selectable>
          <TableHeader labels={headerFields} />
          <tbody>
            {cars}
          </tbody>
        </Table>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  cars: state.cars.items,
  filter: state.filter
})

const mapDispatchToProps = (dispatch) => ({
  displayMore: () => {
    dispatch(displayMoreCars())
  },
  resetDisplayCars: () => {
    dispatch(resetDisplayCars())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FilteredCarsList)
