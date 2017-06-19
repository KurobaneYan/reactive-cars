import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Carousel from 'grommet/components/Carousel'
import Image from 'grommet/components/Image'
import Spinning from 'grommet/components/icons/Spinning'
import ViewIcon from 'grommet/components/icons/base/View'
import Split from 'grommet/components/Split'

import { showCar, resetCar } from '../../actions/singleCar'

class CarPage extends Component {
  componentDidMount () {
    const id = this.props.match.params.id
    this.props.showCar(id)
  }

  componentWillUnmount () {
    this.props.resetCar()
  }

  render () {
    if (this.props.isFetching) {
      return <Spinning />
    }

    const car = this.props.car
    if (isEmpty(car)) {
      return <Spinning />
    }

    if (car.error) {
      return (
        <Box colorIndex='critical' pad='medium'>
          <Heading>
            Car not found
          </Heading>
          <Link to='/'>
            Return to home page
          </Link>
        </Box>
      )
    }

    const carName = car.manufacturer + ' ' + car.model
    const photos = car.photos.map((photo, i) => {
      return <Image src={photo} key={i} />
    })
    return (
      <Box>
        <Heading tag='h2' align='center'>
          {carName}, {car.year}
        </Heading>
        <Split fixed={false} showOnResponsive='both'>
          <Box size='large'>
            <Carousel persistentNav={false} autoplaySpeed={100000}>
              {photos}
            </Carousel>
          </Box>
          <Box pad='medium'>
            <Heading tag='h3'>
              <ViewIcon />
              {car.views}
            </Heading>
            ${car.price}
            <br />
            Engine displacement: {car.engineDisplacement} cm
            <br />
            {car.transmissionType} transmission
            <br />
            Fuel type: {car.fuelType}
            <br />
            {car.kilometrage * 1000} km
          </Box>
        </Split>
      </Box>
    )
  }
}

const mapStateToProps = (state) => ({
  car: state.singleCar.data,
  isFetching: state.singleCar.isFetching
})

const mapDispatchToProps = (dispatch) => ({
  showCar: (id) => {
    dispatch(showCar(id))
  },
  resetCar: () => {
    dispatch(resetCar())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CarPage)
