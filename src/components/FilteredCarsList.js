import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from 'grommet/components/List'
import FilteredCar from './FilteredCar'

class FilteredCars extends Component {
  render () {
    const filter = this.props.filter
    console.log(filter)
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
      if (filter.kilometrage === 0) {
        return true
      }
      if (filter.kilometrage >= car.kilometrage) {
        return true
      }
      return false
    })
    .filter(car => {
      if (filter.engineDisplacement === 0) {
        return true
      }
      if (filter.engineDisplacement >= car.engineDisplacement) {
        return true
      }
      return true
    })
    .map((car, i) => {
      return <FilteredCar key={car._id} car={car} />
    })
    .slice(0, 20)
    return (
      <List>
        {cars}
      </List>
    )
  }
}

const mapStateToProps = (state) => ({
  cars: state.cars,
  filter: state.filter
})

const FilteredCarsList = connect(mapStateToProps)(FilteredCars)

export default FilteredCarsList
