import React, { Component } from 'react'
import Box from 'grommet/components/Box'
import Split from 'grommet/components/Split'
import FilteredCarsList from './FilteredCarsList'
import FilterForm from './FilterForm'

class FilterPage extends Component {
  render () {
    return (
      <Split
        showOnResponsive='both'
        fixed={true}
      >
        <Box>
          <FilterForm />
        </Box>
        <Box>
          <FilteredCarsList cars={this.props.cars} />
        </Box>
      </Split>
    )
  }
}

export default FilterPage
