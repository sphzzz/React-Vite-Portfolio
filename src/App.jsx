import { useState } from 'react'
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material'
import HomePage from './components/HomePage/HomePage'
import { CssBaseline } from "@mui/material";


function App() {
  const [mode, setMode] = useState('light')

  const theme = createTheme({
    palette:{
      mode: mode,
    }
  })

  return (
    <>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
        <HomePage mode={mode} setMode={setMode}/>
      </ThemeProvider>
    </>
  )
}

export default App
