import ThemeProvider from '@eduzz/houston-ui/styles/ThemeProvider'
import Routes from './routes'
import GlobalStyle from './styles/GlobalStyle'

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </div>
  )
}

export default App
