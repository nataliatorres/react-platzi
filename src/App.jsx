import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const items = ["React", "JavaScript", "Vite"];
  const [count, setCount] = useState(0)

  return (
    <section>
      <h1>Prueba, HOla Mundo</h1>
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
