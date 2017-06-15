import React, { Component } from 'react'
import './App.css'
import GrommetApp from 'grommet/components/App'
import Article from 'grommet/components/Article'
import Header from 'grommet/components/Header'
import Section from 'grommet/components/Section'
import Footer from 'grommet/components/Footer'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import FilterPage from './FilterPage'

class App extends Component {
  render () {
    return (
      <GrommetApp>
        <Article>
          <Header colorIndex='brand' pad='medium'>
            <Title>
              REACTIVE CARS
            </Title>
          </Header>
          <Section>
            <FilterPage />
          </Section>
          <Footer justify='between'>
            <Title>
              Reactive Cars
            </Title>
            <Box direction='row'
              pad={{"between": "medium"}}>
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
