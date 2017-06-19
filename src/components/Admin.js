import React, { Component } from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import GrommetApp from 'grommet/components/App'
import Article from 'grommet/components/Article'
import Header from 'grommet/components/Header'
import Section from 'grommet/components/Section'
import Footer from 'grommet/components/Footer'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'

import AdminIndex from './AdminIndex'

class Admin extends Component {
  render () {
    return (
      <GrommetApp>
        <Article>
          <Header colorIndex='accent-3' pad='medium' justify='between'>
            <Title>
              REACTIVE CARS
            </Title>
            <Box>
              hello, Admin
            </Box>
          </Header>
          <Section>
            <Switch>
              <Route path='/admin' component={AdminIndex} />
            </Switch>
          </Section>
        </Article>
      </GrommetApp>
    )
  }
}

export default Admin
