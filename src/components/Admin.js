import React, { Component } from 'react'
import GrommetApp from 'grommet/components/App'
import Article from 'grommet/components/Article'
import Header from 'grommet/components/Header'
import Section from 'grommet/components/Section'
import Footer from 'grommet/components/Footer'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'

class App extends Component {
  render () {
    return (
      <GrommetApp>
        <Article>
          <Header colorIndex='accent-3' pad='medium' justify='between'>
            <Title>
              REACTIVE CARS
            </Title>
            <Box>
              Admin
            </Box>
          </Header>
          <Section>
            TODO: Admin pages
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
