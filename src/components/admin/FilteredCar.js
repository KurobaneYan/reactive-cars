import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import TableRow from 'grommet/components/TableRow'
import Image from 'grommet/components/Image'
import Button from 'grommet/components/Button'
import CloseIcon from 'grommet/components/icons/base/Close'
import EditIcon from 'grommet/components/icons/base/Edit'

import { deleteCar } from '../../actions/admin'

class FilteredCar extends Component {
  constructor () {
    super()
    this.changeRoute = this.changeRoute.bind(this)
    this.deleteCar = this.deleteCar.bind(this)
  }

  changeRoute () {
    const route = '/admin/edit/' + this.props.car._id
    this.props.changeRoute(route)
  }

  deleteCar () {
    this.props.deleteCar(this.props.car._id)
  }

  render () {
    const car = this.props.car
    const name = car.manufacturer + ' ' + car.model
    return (
      <TableRow>
        <td>
          <Image
            alt={name}
            src={car.photos[0]} />
        </td>
        <td>
          {car.manufacturer}
        </td>
        <td>
          {car.model}
        </td>
        <td>
          {car.views}
        </td>
        <td>
          {car.kilometrage}
        </td>
        <td>
          {car.engineDisplacement}
        </td>
        <td>
          {car.year}
        </td>
        <td>
          {car.fuelType}
        </td>
        <td>
          {car.transmissionType}
        </td>
        <td>
          {car.price}
        </td>
        <td>
          <Button icon={<EditIcon />} onClick={this.changeRoute} />
        </td>
        <td>
          <Button icon={<CloseIcon />} onClick={this.deleteCar} />
        </td>
      </TableRow>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeRoute: (route) => {
    dispatch(push(route))
  },
  deleteCar: (id) => {
    dispatch(deleteCar(id))
  }
})

export default connect(state => state, mapDispatchToProps)(FilteredCar)
