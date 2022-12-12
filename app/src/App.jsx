import { createBrowserRouter, Outlet } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Stack from '@mui/material/Stack'

import { useMe } from './Me'

import { Home } from './pages/Home'
import { Klassen } from './pages/Klassen'
import { Teilnehmer } from './pages/Teilnehmer'
import { TeilnehmerEdit } from './pages/TeilnehmerEdit'
import { Upload } from './pages/Upload'
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
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
})


export function Main({ isAdmin }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
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

            <Outlet />
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}


function EmailOrAnwesenheit() {
  const me = useMe()

  if (!me.hasToken())
    return <Email />

  return <Anwesenheit />
}


export const Routes = [
  {
    path: '/', element: <Main isAdmin={false} />, children: [
      { path: '/', element: <EmailOrAnwesenheit /> },
      { path: '/Email', element: <Email /> },
    ]
  },
  {
    path: '/admin', element: <Main isAdmin={true} />, children: [
      { path: 'Klassen', element: <Klassen /> },
      { path: 'Klassen/:id', element: <Klassen /> },
      { path: 'Teilnehmer', element: <Teilnehmer /> },
      { path: 'Teilnehmer/:id', element: <Teilnehmer /> },
      { path: 'Teilnehmer/:id/Edit', element: <TeilnehmerEdit /> },
      { path: 'Upload', element: <Upload /> },
    ]
  },
  {
    path: '/authenticate/:code',
    element: (
      <Authenticate redirectTo="/" />
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
    <RouterProvider router={Router} />
  )
}
