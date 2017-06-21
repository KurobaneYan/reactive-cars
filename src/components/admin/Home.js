import React, { Component } from 'react'
import { connect } from 'react-redux'
import Box from 'grommet/components/Box'
import Layer from 'grommet/components/Layer'
import Button from 'grommet/components/Button'
import CloseIcon from 'grommet/components/icons/base/Close'

import FilteredCarsList from './FilteredCarsList'
import FilterForm from './FilterForm'
import { fetchCars } from '../../actions/cars'
import { showFilter, hideFilter } from '../../actions/admin'

class FilterPage extends Component {
  componentDidMount () {
    this.props.fetchCars()
  }

  render () {
    const hidden = !this.props.isFilterVisible
    return (
      <Box>
        <Button onClick={this.props.showFilter}>
          Show filter
        </Button>
        <Layer
          closer={
            <Box align='end'>
              <Button onClick={this.props.hideFilter} secondary icon={<CloseIcon />} />
            </Box>
          }
          flush
          hidden={hidden}>
          <FilterForm />
        </Layer>
        <FilteredCarsList />
      </Box>
    )
  }
}

const mapStateToProps = (state) => ({
  isFilterVisible: state.admin.isFilterVisible
})

const mapDispatchToProps = (dispatch) => ({
  fetchCars: () => {
    dispatch((fetchCars('http://localhost:4000')))
  },
  showFilter: () => {
    dispatch(showFilter())
  },
  hideFilter: () => {
    dispatch(hideFilter())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterPage)
