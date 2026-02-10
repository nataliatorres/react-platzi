import { createContext, useContext, useState, type ReactNode } from 'react'
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
import CounterWithUseReducer from './components/CounterWithUseReducer/CounterWithUseReducer'
import ButtonWithTS from './components/ButtonWithTS/ButtonWithTS'

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>();

function ThemeProvider({ children }: { children: React.ReactNode }): React.ReactNode {
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

// Typed function
function greeting(name: string): string {
  return `Hola ${name}`;
}

function App() {

  const items = ["React", "JavaScript", "Vite"];
  const handleClick = () =>  alert ("Ya hiciste click");
  console.log(greeting("Natalia"));

  return (
    <section>
      <StaticComponent/>
      <ButtonWithTS onclick={handleClick} label="Click me"/>
      <NoAsAService/>
      <SearchData/>
      <CounterWithUseReducer/>
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
