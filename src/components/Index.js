import React, { Component } from 'react'
import { connect } from 'react-redux'
import Box from 'grommet/components/Box'
import './Index.css'
import CarCard from './CarCard'

class Index extends Component {
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

export default connect(mapStateToProps)(Index)
