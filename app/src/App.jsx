import { createBrowserRouter, Link, Outlet } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';

import { Home } from './pages/Home'
import { Klassen } from './pages/Klassen'
import { Teilnehmer } from './pages/Teilnehmer'
import { TeilnehmerEdit } from './pages/TeilnehmerEdit'
import { Upload } from './pages/Upload'
import { Email } from './pages/Email'
import { Anwesenheit } from './pages/Anwesenheit'

import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'

import logo from './logo.svg'
import wetek from './wetek.svg'
import './App.css'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';


const theme = createTheme({
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
});


function Root() {
  return (
    <Stack>
      <header className="App-header">
        <div className="container">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <img src={wetek} className="App-wetek" alt="wetek" />
        </div>
      </header>
      <div className="App-body">
        <Fade in={true} timeout={700}>
        <Box>
        <NavBar />
        </Box>
        </Fade>

        <Home />

        <Outlet />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </Stack>
  );
}


function RootTN() {
  return (
    <Stack>
      <header className="App-header">
        <div className="container">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <img src={wetek} className="App-wetek" alt="wetek" />
        </div>
      </header>
      <div className="App-body">
        <Home />

        <Outlet />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </Stack>
  );
}


const Router = createBrowserRouter([
  {
    path: '/', element: <RootTN />, children: [
      //      { path: '/', element: <Home /> },
      { path: '/', element: <Email /> },
      { path: '/:key', element: <Anwesenheit /> },
    ] },
  {
    path: '/admin', element: <Root />, children: [
        //      { path: '/', element: <Home /> },
      { path: 'Klassen', element: <Klassen /> },
      { path: 'Klassen/:id', element: <Klassen /> },
      { path: 'Teilnehmer', element: <Teilnehmer /> },
      { path: 'Teilnehmer/:id', element: <Teilnehmer /> },
      { path: 'Teilnehmer/:id/Edit', element: <TeilnehmerEdit /> },
      { path: 'Upload', element: <Upload /> },
  ] },
])



export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
      <RouterProvider router={Router} />
      </Box>
    </ThemeProvider>
  )
}
