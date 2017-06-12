import React, { Component } from 'react'
import './App.css'
import GrommetApp from 'grommet/components/App'
import Article from 'grommet/components/Article'
import Header from 'grommet/components/Header'
import Section from 'grommet/components/Section'
import Footer from 'grommet/components/Footer'
import Title from 'grommet/components/Title'
import Button from 'grommet/components/Button'

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
            <Button
              label='click me'
              primary={true}
              onClick={() => console.log('clicked')}
            />
          </Section>
          <Footer>
          </Footer>
        </Article>
      </GrommetApp>
    )
  }
}

export default App
