import logo from './logo.svg'
import './App.css'
import { DarkModeProvider } from './contexts/DarkModeContext'
import useDarkMode from './hooks/useDarkMode'

const DarkModeHeader = ({ children }) => {
  const isDarkMode = useDarkMode()

  return (
    <header className="App-header" style={{
      backgroundColor: isDarkMode ? '#282c34' : '#ebebeb',
    }}>
      { children }
    </header>
  )
}

const DarkModeText = () => {
  const isDarkMode = useDarkMode()

  return (
    <p style={{
      color: isDarkMode ? 'white' : 'black',
    }}>
      Darkmode <code>{ isDarkMode ? 'enabled' : 'disabled' }</code>.
    </p>
  )
}

const App = () => {
  return (
    <DarkModeProvider>
      <div className="App">
        <DarkModeHeader>
          <img src={logo} className="App-logo" alt="logo" />
          <DarkModeText />
          <a
            className="App-link"
            href="https://visitdays.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            VisitDays
          </a>
        </DarkModeHeader>
      </div>
    </DarkModeProvider>
  )
}

export default App
