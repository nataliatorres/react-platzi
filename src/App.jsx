import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import Counter from './components/Counter'
import ToggleButton from './components/ToggleButton'
import NameForm from './components/NameForm'
import './App.css'

function App() {

  const items = ["React", "JavaScript", "Vite"];

  return (
    <section>
      <h1>Name Form</h1>
      <NameForm/>
      <ToggleButton/>
      <Counter/>
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
