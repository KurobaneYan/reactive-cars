import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import isEmpty from 'lodash/isEmpty'
import omit from 'lodash/omit'
import omitBy from 'lodash/omitBy'
import isNull from 'lodash/isNull'
import Form from 'grommet/components/Form'
import FormFields from 'grommet/components/FormFields'
import Select from 'grommet/components/Select'
import NumberInput from 'grommet/components/NumberInput'
import FormField from 'grommet/components/FormField'
import Footer from 'grommet/components/Footer'
import Button from 'grommet/components/Button'
import queryString from 'query-string'

import * as Actions from '../../actions/filter'
import getCatalog from '../../actions/catalog'

const manufacturerModels = {
  'BMW': ['', 'I3', 'I8', 'M6'],
  'Volvo': ['', 'V90', 'S90', 'XC90'],
  'Mitsubishi': ['', 'Lancer', 'Outlander', 'Pajero']
}

const fuelTypes = ['', 'Disel', 'Gasoline']

const transmissions = ['', 'Automatic', 'Manual']

class FilteredForm extends Component {
  constructor () {
    super()
    this.changeRoute = this.changeRoute.bind(this)
  }

  componentDidMount () {
    this.props.getCatalog()
    let newFilter = queryString.parse(window.location.search)
    for (let key in newFilter) {
      const number = parseInt(newFilter[key], 10)
      if (!isNaN(number)) {
        newFilter[key] = number
      }
    }
    this.props.restoreFilter(newFilter)
  }

  changeRoute () {
    let filter = omit(this.props.filter, ['catalog', 'catalogIsFetching'])
    filter = omitBy(filter, isNull)
    filter = omitBy(filter, (i) => i === '')

    const route = queryString.stringify(filter)
    this.props.changeRoute(route)
  }

  componentDidUpdate () {
    this.changeRoute()
  }

  render () {
    const filter = this.props.filter
    const catalog = this.props.catalog
    let models = ['']
    let manufacturers = ['']
    if (catalog.catalogIsFetching && isEmpty(catalog.catalog)) {
      manufacturers = manufacturers.concat(Object.keys(manufacturerModels))
      if (filter.manufacturer) {
        models = models.concat(manufacturerModels[filter.manufacturer])
      }
    } else {
      manufacturers = manufacturers.concat(Object.keys(catalog.data))
      if (filter.manufacturer) {
        models = models.concat(catalog.data[filter.manufacturer])
      }
    }
    return (
      <Form compact>
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
            secondary
            fill
            onClick={this.props.resetForm} />
        </Footer>
      </Form>
    )
  }
}

const mapStateToProps = (state) => ({
  filter: state.filter,
  catalog: state.catalog
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
  getCatalog: () => {
    dispatch(getCatalog())
  },
  resetForm: () => {
    dispatch(Actions.resetForm())
  },
  changeRoute: (route) => {
    const newRoute = '/admin?' + route
    dispatch(push(newRoute))
  },
  restoreFilter: (filter) => {
    dispatch(Actions.restoreFilter(filter))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FilteredForm)
