import React, { Component } from 'react'
import ListItem from 'grommet/components/ListItem'
import Box from 'grommet/components/Box'
import Image from 'grommet/components/Image'

class FilteredCar extends Component {
  render () {
    const car = this.props.car
    const name = car.manufacturer + ' ' + car.model
    return (
      <ListItem separator='none'>
        <Image
          alt={name}
          size='small'
          src={car.photos[0]}
        />
        <Box pad='small'>
          {name}
        </Box>
      </ListItem>
    )
  }
}

export default FilteredCar