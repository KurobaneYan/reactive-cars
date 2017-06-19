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

import Index from './Index'
import CarPage from './CarPage'
import FilterPage from './FilterPage'

class App extends Component {
  render () {
    return (
      <GrommetApp>
        <Article>
          <Header colorIndex='brand'>
            <Title pad='medium'>
              <Link to='/'>
                REACTIVE CARS
              </Link>
            </Title>
            <Title flex
              justify='end'
              direction='row'
              pad='medium'
              responsive={false}>
              <Link to='/filter'>
                Filter
              </Link>
            </Title>
          </Header>
          <Section>
            <Switch>
              <Route exact path='/' component={Index} />
              <Route path='/car/:id' component={CarPage} />
              <Route path='/filter' component={FilterPage} />
              <Redirect from='/' to='/'/>
            </Switch>
          </Section>
          <Footer justify='between'>
            <Title>
              Reactive Cars
            </Title>
            <Box direction='row'
              pad={{'between': 'medium'}}>
              <Paragraph margin='none'>
                © 2017 reactive cars
              </Paragraph>
            </Box>
          </Footer>
        </Article>
      </GrommetApp>
    )
  }
}

export default App
