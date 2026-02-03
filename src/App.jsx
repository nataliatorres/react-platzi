import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/images/vite.svg'
import Card from './components/card'
import Counter from './components/Counter'
import ToggleButton from './components/ToggleButton'
import NameForm from './components/NameForm'
import './App.css'
import CounterWithEffect from './components/CounterWithEffect'
import StyledCard from './components/StyledCard/StyledCard'
import TailwindExample from './components/TailwindExample/TailwindExample'
import StaticComponent from './components/StaticComponent/StaticComponent'
import StyledCardd from './components/StyledCardd/StyledCardd'
import NoAsAService from './components/NoAsAService/NoAsAService'

function App() {

  const items = ["React", "JavaScript", "Vite"];

  return (
    
    <section>
      <StaticComponent/>
      <NoAsAService/>
      <h1>Intro</h1>
      <TailwindExample/>
      <StyledCard/>
      {/*<StyledCardd/> */}
        <h2>Name Form</h2>
        <NameForm/>
        <ToggleButton/>
        <Counter/>
        <CounterWithEffect/>
        <Card title = "Card 1" description = "This is a description" />
        <ul>
          {
            items.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>
    </section>
  )
}

export default App
