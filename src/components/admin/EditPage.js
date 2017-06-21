import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import isEmpty from 'lodash/isEmpty'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Carousel from 'grommet/components/Carousel'
import Image from 'grommet/components/Image'
import Spinning from 'grommet/components/icons/Spinning'
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import TextInput from 'grommet/components/TextInput'
import NumberInput from 'grommet/components/NumberInput'
import Button from 'grommet/components/Button'

import * as Actions from '../../actions/singleCar'
import { updateCar } from '../../actions/admin'
import getCatalog from '../../actions/catalog'

const CLOUDINARY_UPLOAD_PRESET = 'reactive-cars'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dvgllaiei/upload'

const fuelTypes = ['Disel', 'Gasoline']
const transmissions = ['Automatic', 'Manual']

class EditPage extends Component {
  constructor (props) {
    super(props)
    this.save = this.save.bind(this)
    this.handleImageUpload = this.handleImageUpload.bind(this)
  }

  save (event) {
    const car = this.props.car
    this.props.save(car._id, car)
    alert('changes saved')
  }

  componentDidMount () {
    this.props.getCatalog()
    const id = this.props.match.params.id
    this.props.readCar(id)
  }

  componentWillUnmount () {
    this.props.resetCar()
  }

  onImageDrop (files) {
    this.handleImageUpload(files[0])
  }

  handleImageUpload (file) {
    let formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }

    axios.post(CLOUDINARY_UPLOAD_URL, formData, config)
    .then(res => {
      console.log(res.data.secure_url)
      this.props.addPhoto(res.data.secure_url)
    })
    .catch(err => console.error(err))
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
          <Link to='/admin'>
            Return to home page
          </Link>
        </Box>
      )
    }

    let photos = []
    let showPhotos = false
    if (car.photos) {
      showPhotos = true
      photos = car.photos.map((photo, i) => {
        return <Image src={photo} key={i} />
      })
    }

    let manufacturers = []
    let models = []
    if (!isEmpty(this.props.catalog)) {
      manufacturers = Object.keys(this.props.catalog)
      if (car.manufacturer) {
        models = this.props.catalog[car.manufacturer]
      }
    }

    return (
      <Box align='center'>
        <Form>
          <FormField label='Manufacturer'>
            <TextInput
              suggestions={manufacturers}
              onSelect={this.props.onManufacturerChange}
              value={car.manufacturer}
              onDOMChange={this.props.onManufacturerChange} />
          </FormField>
          <FormField label='Model'>
            <TextInput
              suggestions={models}
              onSelect={this.props.onModelChange}
              value={car.model}
              onDOMChange={this.props.onModelChange} />
          </FormField>
          <FormField label='Year'>
            <NumberInput
              min={1990}
              max={2017}
              value={car.year}
              onChange={this.props.onYearChange} />
          </FormField>
          <FormField label='Kilometrage'>
            <NumberInput
              min={0}
              max={1000}
              value={car.kilometrage}
              onChange={this.props.onKilometrageChange} />
          </FormField>
          <FormField label='Views'>
            <NumberInput
              min={0}
              value={car.views}
              onChange={this.props.onViewsChange} />
          </FormField>
          <FormField label='Fuel Type'>
            <TextInput
              suggestions={fuelTypes}
              onSelect={this.props.onFuelTypeChange}
              value={car.fuelType}
              onDOMChange={this.props.onFuelTypeChange} />
          </FormField>
          <FormField label='Engine Displacement'>
            <NumberInput
              min={0}
              step={100}
              value={car.engineDisplacement}
              onChange={this.props.onEngineDisplacementChange} />
          </FormField>
          <FormField label='Transmission Type'>
            <TextInput
              suggestions={transmissions}
              onSelect={this.props.onTransmissionTypeChange}
              value={car.transmissionType}
              onDOMChange={this.props.onTransmissionTypeChange} />
          </FormField>
          <FormField label='Price'>
            <NumberInput
              step={100}
              min={0}
              max={1000000}
              onChange={this.props.onPriceChange}
              value={car.price} />
          </FormField>
          <Box align='center'>
            <Dropzone
              onDrop={this.onImageDrop.bind(this)}
              multiple={false}
              accept='image/*'>
              <div>Drop am image or click to select a file to upload.</div>
            </Dropzone>
          </Box>
          {showPhotos ? (
            <Carousel persistentNav={false} autoplaySpeed={100000}>
              {photos}
            </Carousel>
          ) : (
            <Box />
          )}
          <Button
            label='Remove Photo'
            fill
            onClick={this.props.removePhoto} />
          <Button
            label='save'
            fill
            primary
            onClick={this.save} />
        </Form>
      </Box>
    )
  }
}

const mapStateToProps = (state) => ({
  car: state.singleCar,
  isFetching: state.singleCar.isFetching,
  catalog: state.catalog.data
})

const mapDispatchToProps = (dispatch) => ({
  readCar: (id) => {
    dispatch(Actions.readCar(id))
  },
  onManufacturerChange: (e) => {
    if (e.target) {
      dispatch(Actions.setManufacturer(e.target.value))
    }
    if (e.suggestion) {
      dispatch(Actions.setManufacturer(e.suggestion))
    }
  },
  onModelChange: (e) => {
    if (e.target) {
      dispatch(Actions.setModel(e.target.value))
    }
    if (e.suggestion) {
      dispatch(Actions.setModel(e.suggestion))
    }
  },
  onYearChange: (e) => {
    const val = parseInt(e.target.value, 10)
    if ((val > 1990) && (val <= 2017)) {
      dispatch(Actions.setYear(val))
    }
  },
  onKilometrageChange: (e) => {
    const val = parseInt(e.target.value, 10)
    if ((val >= 0) && (val <= 1000)) {
      dispatch(Actions.setKilometrage(val))
    }
  },
  onViewsChange: (e) => {
    const val = parseInt(e.target.value, 10)
    if ((val >= 0)) {
      dispatch(Actions.setViews(val))
    }
  },
  onFuelTypeChange: (e) => {
    if (e.target) {
      dispatch(Actions.setFuelType(e.target.value))
    }
    if (e.suggestion) {
      dispatch(Actions.setFuelType(e.suggestion))
    }
  },
  onEngineDisplacementChange: (e) => {
    const val = parseInt(e.target.value, 10)
    if ((val >= 0)) {
      dispatch(Actions.setEngineDisplacement(val))
    }
  },
  onTransmissionTypeChange: (e) => {
    if (e.target) {
      dispatch(Actions.setTransmissionType(e.target.value))
    }
    if (e.suggestion) {
      dispatch(Actions.setTransmissionType(e.suggestion))
    }
  },
  onPriceChange: (e) => {
    const val = parseInt(e.target.value, 10)
    if ((val > 0) && (val <= 1000000)) {
      dispatch(Actions.setPrice(val))
    }
  },
  save: (id, car) => {
    dispatch(updateCar(id, car))
  },
  addPhoto: (photo) => {
    dispatch(Actions.addPhoto(photo))
  },
  removePhoto: () => {
    dispatch(Actions.removePhoto())
  },
  resetCar: () => {
    dispatch(Actions.resetCar())
  },
  getCatalog: () => {
    dispatch(getCatalog())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPage)
