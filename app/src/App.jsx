import { useEffect, useState } from "react"
import { createBrowserRouter, Outlet, useLocation } from 'react-router-dom'
import { Navigate, RouterProvider } from 'react-router-dom'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'

import { Provider as MeProvider, useMe } from './Me'

import { Home } from './pages/Home'
import { Klassen } from './pages/Klassen'
import { Teilnehmer } from './pages/Teilnehmer'
import { TeilnehmerEdit } from './pages/TeilnehmerEdit'
import { Email } from './pages/Email'
import { Anwesenheit } from './pages/Anwesenheit'
import { Authenticate } from './pages/Authenticate'
import { Status } from './pages/Status'

import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'

import logo from './logo.svg'
import wetek from './wetek.svg'
import './App.css'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'


function Auto() {
  const me = useMe()
  const [quo, setQuo] = useState(null)

  useEffect(() => {
    async function askMe() {
      if (me.hasToken()) {
        const isAdmin = await me.isAdmin()

        setQuo(isAdmin ? '/admin' : '/anwesenheit')
      }
      else {
        setQuo('/email')
      }
    }

    askMe()
  }, [me, setQuo])

  return (quo ? <Navigate to={quo} /> : <div></div>)
}


const theme = createTheme({
  typography: {
    fontFamily: [
      'Calibri',
      'Roboto',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
//      main: '#0971f1',
//      main: '#0951c1',
      main: '#098151',
//      darker: '#053e85',
      darker: '#053e35',
    },
    secondary: {
      main: '#f95111',
      darker: '#053e85',
    },
    info: {
      main: '#099151',
      darker: '#053e85',
    },
    neutral: {
//      main: '#64748B',
      main: '#44546B',
      contrastText: '#fff',
    },
  },
})



export function Main({ isAdmin }) {
  return (
    <Stack>
      <div className="App-header">
        <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={wetek} className="App-wetek" alt="wetek" />
        </div>
        <Fade in={true} timeout={700}>
          <Box>
            <NavBar isAdmin={isAdmin} />
          </Box>
        </Fade>
      </div>
      <div className="App-body">
        <Home />

        <Container sx={{ padding: 3 }}>
          <Paper elevation={5}>
            <Stack sx={{ margin: 0, padding: 0 }}>
              <Outlet />
            </Stack>
          </Paper>
        </Container>
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </Stack>
  )
}


export const Routes = [
  {
    path: '/', element: <Auto />
  },
  {
    path: '/admin', element: <Main isAdmin={true} />, children: [
      { path: 'Klassen', element: <Klassen /> },
      { path: 'Klassen/:id', element: <Klassen /> },
      { path: 'Teilnehmer', element: <Teilnehmer /> },
      { path: 'Teilnehmer/:id', element: <Teilnehmer /> },
      { path: 'Teilnehmer/:id/Edit', element: <TeilnehmerEdit /> },
    ]
  },
  {
    path: '/anwesenheit', element: <Main isAdmin={false} />, children: [
      { path: '', element: <Anwesenheit /> }
    ]
  },
  {
    path: '/email', element: <Main isAdmin={false} />, children: [
      { path: '', element: <Email /> }
    ]
  },
  {
    path: '/authenticate/:code',
    element: (
      <Authenticate />
    ),
  },
  {
    path: '/status',
    element: (
      <Status />
    ),
  },
]

const Router = createBrowserRouter(Routes)

export function App() {
  return (
    <MeProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          <RouterProvider router={Router} />
        </Box>
      </ThemeProvider>
    </MeProvider>
  )
}