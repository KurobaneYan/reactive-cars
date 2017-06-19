import React, { Component } from 'react'
import { connect } from 'react-redux'
import Box from 'grommet/components/Box'

import './Home.css'
import CarCard from './CarCard'
import { fetchCarsIfNeeded } from '../../actions/cars'

class Index extends Component {
  componentDidMount () {
    this.props.fetchCars()
  }
  render () {
    const cars = this.props.cars
    .sort((a, b) => b.views - a.views)
    .slice(0, 25)
    .map((car, i) => {
      return <CarCard key={car._id} car={car} />
    })
    return (
      <Box id='carCards'>
        {cars}
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

export default connect(mapStateToProps, mapDispatchToProps)(Index)
