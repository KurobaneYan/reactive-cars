import React, { Component } from 'react'
import { connect } from 'react-redux'
import Box from 'grommet/components/Box'
import Split from 'grommet/components/Split'

import FilteredCarsList from './FilteredCarsList'
import FilterForm from './FilterForm'
import { fetchCars } from '../../actions/cars'

class FilterPage extends Component {
  componentDidMount () {
    this.props.fetchCars()
  }

  render () {
    return (
      <Split
        showOnResponsive='both'
        flex='right'
        fixed={false}>
        <Box>
          <FilterForm />
        </Box>
        <Box>
          <FilteredCarsList />
        </Box>
      </Split>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCars: () => {
    dispatch((fetchCars('http://localhost:4000')))
  }
})

export default connect(state => state, mapDispatchToProps)(FilterPage)
