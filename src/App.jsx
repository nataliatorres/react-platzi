import { createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/images/vite.svg'
import Card from './components/Card'
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
import SearchData from './components/SearchData/SearchData'
import CounterWithUseReact from './components/CounterWithUseReact/CounterWithUseReact'

const ThemeContext = createContext();

function ThemeProvider({children}) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

function ThemeButton() {
  const {theme, toggleTheme} = useContext( ThemeContext );
  
  const activeStyle = theme === "light" ? "bg-white text-black" : "bg-black text-white";

  return (
    <button className={`${activeStyle}`} onClick={toggleTheme}>Change theme</button>
  )

}

function App() {

  const items = ["React", "JavaScript", "Vite"];

  return (
    <section>
      <StaticComponent/>
      <NoAsAService/>
      <SearchData/>
      <CounterWithUseReact/>
      <ThemeProvider>
        <ThemeButton/>
      </ThemeProvider>
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
