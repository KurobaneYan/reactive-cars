import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import Box from 'grommet/components/Box'
import Carousel from 'grommet/components/Carousel'
import Image from 'grommet/components/Image'
import Spinning from 'grommet/components/icons/Spinning'
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import TextInput from 'grommet/components/TextInput'
import NumberInput from 'grommet/components/NumberInput'
import Button from 'grommet/components/Button'

import * as Actions from '../../actions/singleCar'
import { createCar } from '../../actions/admin'

const CLOUDINARY_UPLOAD_PRESET = 'reactive-cars'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dvgllaiei/upload'

const car = {
  manufacturer: 'Mitsubishi',
  model: 'Lancer',
  year: 2012,
  kilometrage: 445,
  fuelType: 'Disel',
  engineDisplacement: 2000,
  transmissionType: 'Automatic',
  price: 140000,
  views: 881,
  photos: ['https://img.memecdn.com/404-car-not-found_c_6767609.jpg']
}

class CreatePage extends Component {
  constructor (props) {
    super(props)
    this.create = this.create.bind(this)
    this.handleImageUpload = this.handleImageUpload.bind(this)
  }

  create (event) {
    this.props.create(this.props.car)
    alert('Car created')
  }

  componentDidMount () {
    this.props.setCar(car)
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

    let photos = []
    let showPhotos = false
    if (car.photos) {
      showPhotos = true
      photos = car.photos.map((photo, i) => {
        return <Image src={photo} key={i} />
      })
    }

    return (
      <Box align='center'>
        <Form>
          <FormField label='Manufacturer'>
            <TextInput
              value={car.manufacturer}
              onDOMChange={this.props.onManufacturerChange} />
          </FormField>
          <FormField label='Model'>
            <TextInput
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
            <Carousel>
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
            label='create'
            fill
            primary
            onClick={this.create} />
        </Form>
      </Box>
    )
  }
}

const mapStateToProps = (state) => ({
  car: state.singleCar,
  isFetching: state.singleCar.isFetching
})

const mapDispatchToProps = (dispatch) => ({
  setCar: (id) => {
    dispatch(Actions.setCar(id))
  },
  onManufacturerChange: (e) => {
    dispatch(Actions.setManufacturer(e.target.value))
  },
  onModelChange: (e) => {
    dispatch(Actions.setModel(e.target.value))
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
    dispatch(Actions.setFuelType(e.target.value))
  },
  onEngineDisplacementChange: (e) => {
    const val = parseInt(e.target.value, 10)
    if ((val >= 0)) {
      dispatch(Actions.setEngineDisplacement(val))
    }
  },
  onTransmissionTypeChange: (e) => {
    dispatch(Actions.setTransmissionType(e.target.value))
  },
  onPriceChange: (e) => {
    const val = parseInt(e.target.value, 10)
    if ((val > 0) && (val <= 1000000)) {
      dispatch(Actions.setPrice(val))
    }
  },
  addPhoto: (photo) => {
    dispatch(Actions.addPhoto(photo))
  },
  removePhoto: () => {
    dispatch(Actions.removePhoto())
  },
  create: (car) => {
    dispatch(createCar(car))
  },
  resetCar: () => {
    dispatch(Actions.resetCar())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage)
