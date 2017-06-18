import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from 'grommet/components/Form'
import FormFields from 'grommet/components/FormFields'
import Select from 'grommet/components/Select'
import NumberInput from 'grommet/components/NumberInput'
import FormField from 'grommet/components/FormField'
import Footer from 'grommet/components/Footer'
import Button from 'grommet/components/Button'

import * as Actions from '../actions'

const manufacturerModels = {
  '': [''],
  'BMW': ['', 'I3', 'I8', 'M6'],
  'Volvo': ['', 'V90', 'S90', 'XC90'],
  'Mitsubishi': ['', 'Lancer', 'Outlander', 'Pajero']
}

const fuelTypes = ['', 'Disel', 'Gasoline']

const transmissions = ['', 'Automatic', 'Manual']

class FilteredForm extends Component {
  render () {
    const manufacturers = Object.keys(manufacturerModels)
    let models = []
    if (this.props.filter.manufacturer) {
      models = manufacturerModels[this.props.filter.manufacturer]
    }
    return (
      <Form>
        <FormFields>
          <Select placeHolder='Manufacturer'
            options={manufacturers}
            onChange={this.props.onManufacturerChange}
            value={this.props.filter.manufacturer} />
          <Select placeHolder='Model'
            options={models}
            onChange={this.props.onModelChange}
            value={this.props.filter.model} />
          <FormField label='Price From'>
            <NumberInput
              step={100}
              onChange={this.props.onPriceFromChange}
              min={0}
              max={1000000}
              value={this.props.filter.priceFrom} />
          </FormField>
          <FormField label='Price To'>
            <NumberInput
              step={100}
              onChange={this.props.onPriceToChange}
              min={0}
              max={1000000}
              value={this.props.filter.priceTo} />
          </FormField>
          <FormField label='Year From'>
            <NumberInput
              onChange={this.props.onYearFromChange}
              min={1990}
              max={2017}
              value={this.props.filter.yearFrom} />
          </FormField>
          <FormField label='Year To'>
            <NumberInput
              onChange={this.props.onYearToChange}
              min={1990}
              max={2017}
              value={this.props.filter.yearTo} />
          </FormField>
          <Select placeHolder='Transmission'
            options={transmissions}
            onChange={this.props.onTransmissionChange}
            value={this.props.filter.transmission} />
          <Select placeHolder='Fuel Type'
            options={fuelTypes}
            onChange={this.props.onFuelTypeChange}
            value={this.props.filter.fuelType} />
          <FormField label='Max killometrage in Mega meters'>
            <NumberInput
              onChange={this.props.onKilometrageChange}
              min={0}
              max={1000}
              value={this.props.filter.kilometrage} />
          </FormField>
          <FormField label='Engine Displacement'>
            <NumberInput
              onChange={this.props.onEngineDisplacementChange}
              step={100}
              min={0}
              max={5000}
              value={this.props.filter.engineDisplacement} />
          </FormField>
        </FormFields>
        <Footer pad={{'vertical': 'medium'}}>
          <Button label='Reset'
            primary
            onClick={this.props.resetForm} />
        </Footer>
      </Form>
    )
  }
}

const mapStateToProps = (state) => ({
  filter: state.filter
})

const mapDispatchToProps = (dispatch) => ({
  onManufacturerChange: (obj) => {
    const newValue = obj.value || null
    dispatch(Actions.filterByManufacturer(newValue))
    dispatch(Actions.filterByModel(null))
  },
  onModelChange: (obj) => {
    const newValue = obj.value || null
    dispatch(Actions.filterByModel(newValue))
  },
  onPriceFromChange: (event) => {
    let val = event.target.value
    if (val === '') {
      dispatch(Actions.filterByPriceFrom(val))
    }
    val = parseInt(val, 10)
    if ((val > 0) && (val <= 1000000)) {
      dispatch(Actions.filterByPriceFrom(val))
    }
  },
  onPriceToChange: (event) => {
    let val = event.target.value
    if (val === '') {
      dispatch(Actions.filterByPriceTo(val))
    }
    val = parseInt(val, 10)
    if ((val > 0) && (val <= 1000000)) {
      dispatch(Actions.filterByPriceTo(val))
    }
  },
  onYearFromChange: (event) => {
    let val = event.target.value
    if (val === '') {
      dispatch(Actions.filterByYearFrom(val))
    }
    val = parseInt(val, 10)
    if ((val >= 1990) && (val <= 2017)) {
      dispatch(Actions.filterByYearFrom(val))
    }
  },
  onYearToChange: (event) => {
    let val = event.target.value
    if (val === '') {
      dispatch(Actions.filterByYearTo(val))
    }
    val = parseInt(val, 10)
    if ((val >= 1990) && (val <= 2017)) {
      dispatch(Actions.filterByYearTo(val))
    }
  },
  onTransmissionChange: (obj) => {
    const newValue = obj.value || null
    dispatch(Actions.filterByTransmission(newValue))
  },
  onFuelTypeChange: (obj) => {
    const newValue = obj.value || null
    dispatch(Actions.filterByFuelType(newValue))
  },
  onKilometrageChange: (event) => {
    let val = event.target.value
    if (val === '') {
      dispatch(Actions.filterByKilometrage(val))
    }
    val = parseInt(val, 10)
    if ((val >= 0) && (val <= 1000)) {
      dispatch(Actions.filterByKilometrage(val))
    }
  },
  onEngineDisplacementChange: (event) => {
    let val = event.target.value
    if (val === '') {
      dispatch(Actions.filterByEngineDisplacement(val))
    }
    val = parseInt(val, 10)
    if ((val >= 0) && (val <= 5000)) {
      dispatch(Actions.filterByEngineDisplacement(val))
    }
  },
  resetForm: () => {
    dispatch(Actions.resetForm())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FilteredForm)
