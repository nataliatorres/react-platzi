import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import Counter from './components/Counter'
import ToggleButton from './components/ToggleButton'
import './App.css'

function App() {

  const items = ["React", "JavaScript", "Vite"];
  const [count, setCount] = useState(0)

  return (
    <section>
      <h1>Title</h1>
      <ToggleButton />
      <Counter />
      <Card title = "Card 1" description = "This is a description" />
      <Card title = "Card 2" description = "The second card is a copy of the first one" />
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
