
import { useContext } from 'react'
import { AppRoutes } from '../src/pages/routes'
import Header from './components/header'
import { ThemeContext } from './components/theme/'
import { ThemeProvider } from 'styled-components'




function App() {

  const { theme } = useContext(ThemeContext)


  return (
    <>


      <ThemeProvider theme={theme}>

        <Header />

        <AppRoutes />


      </ThemeProvider>

    </>

  )
}

export default App
