import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from 'grommet/components/Card'

import './CarCard.css'

class CarCard extends Component {
  render () {
    const url = '/car/' + this.props.car._id
    return (
      <Card
        className='carCard'
        contentPad='none'
        thumbnail={this.props.car.photos[0]}
        heading={this.props.car.manufacturer + ' ' + this.props.car.model}
        headingStrong={false}
        description={this.props.car.kilometrage * 1000 +
          ' km, $' + this.props.car.price}
        link={<Link to={url}>Link</Link>}
      />
    )
  }
}

export default CarCard
