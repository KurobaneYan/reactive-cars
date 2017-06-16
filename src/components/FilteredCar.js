import React, { Component } from 'react'
import ListItem from 'grommet/components/ListItem'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Image from 'grommet/components/Image'

class FilteredCar extends Component {
  render () {
    const car = this.props.car
    const name = car.manufacturer + ' ' + car.model
    return (
      <ListItem separator='none'>
        <Image
          alt={name}
          src={car.photos[0]}
        />
        <Box pad='small' alignContent='start'>
          <Heading tag='h3'>
            {name}
          </Heading>
          <Box>
            {car.views} views
          </Box>
          <Box>
            Kilometrage - {car.kilometrage * 1000} km
          </Box>
          <Box>
            Engine displacement {car.engineDisplacement} cm
          </Box>
          <Box>
            Year {car.year}
          </Box>
          <Box>
            Fuel Type {car.fuelType}
          </Box>
          <Box>
            {car.transmissionType} transmission
          </Box>
          <Box>
            ${car.price}
          </Box>
        </Box>
      </ListItem>
    )
  }
}

export default FilteredCar
