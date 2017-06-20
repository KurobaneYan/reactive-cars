import React, { Component } from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import GrommetApp from 'grommet/components/App'
import Article from 'grommet/components/Article'
import Header from 'grommet/components/Header'
import Section from 'grommet/components/Section'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'

import Home from './Home'
import EditPage from './EditPage'

class Index extends Component {
  render () {
    return (
      <GrommetApp>
        <Article>
          <Header colorIndex='accent-3' pad='medium' justify='between'>
            <Title>
              <Link to='/admin'>
                REACTIVE CARS
              </Link>
            </Title>
            <Box>
              hello, Admin
            </Box>
          </Header>
          <Section>
            <Switch>
              <Route exact path='/admin' component={Home} />
              <Route path='/admin/edit/:id' component={EditPage} />
              <Redirect from='/admin' to='/admin' />
            </Switch>
          </Section>
        </Article>
      </GrommetApp>
    )
  }
}

export default Index
