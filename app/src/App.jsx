import { useEffect, useState } from "react"
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { Link, Navigate, RouterProvider } from 'react-router-dom'

import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'

import { Provider as MeProvider, useMe } from './Me'

import { Home } from './pages/Home'
import { Klassen } from './pages/Klassen'
import { KlassenEdit } from './pages/KlassenEdit'
import { KlassenNeu } from './pages/KlassenNeu'
import { Teilnehmer } from './pages/Teilnehmer'
import { TeilnehmerEdit } from './pages/TeilnehmerEdit'
import { TeilnehmerNeu } from './pages/TeilnehmerNeu'
import { Email } from './pages/Email'
import { Anwesenheit } from './pages/Anwesenheit'
import { Authenticate } from './pages/Authenticate'
import { Error } from './pages/Error'
import { Setup } from './pages/Setup'
import { Status } from './pages/Status'
import { QR } from './pages/QR'

import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { Loading } from './components/Loading'

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

                if (isAdmin !== null)
                    setQuo(isAdmin ? '/admin' : '/anwesenheit')
            }
            else {
                setQuo('/email')
            }
        }

        askMe()
    }, [me, setQuo])

    return (quo ? <Navigate to={quo} /> : <Loading />)
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
                    <Link to='/'>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>
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

                <Box sx={{ padding: 1 }}>
                    <Paper elevation={5}>
                        <Stack sx={{ margin: 0, padding: 0 }}>
                            <Outlet />
                        </Stack>
                    </Paper>
                </Box>
            </div>
            <div className="App-footer">
                <Footer />
            </div>
        </Stack>
    )
}


export const Routes = [
    {
        path: '/',
        element: <Auto />
    },
    {
        path: 'error/:message',
        element: <Error />
    },
    {
        path: '/authenticate/:code',
        element: <div className="App-body"><Outlet /></div>, children: [
            { path: '', element: <Authenticate /> },
            { path: 'error/:message', element: <Error /> }
        ]
    },
    {
        path: '/status',
        element: <div className="App-body"><Outlet /></div>, children: [
            { path: '', element: <Status /> },
            { path: 'error/:message', element: <Error /> }
        ]
    },
    {
        path: '/email',
        element: <Main isAdmin={false} />, children: [
            { path: '', element: <Email /> },
            { path: 'error/:message', element: <Error /> }
        ]
    },
    {
        path: '/anwesenheit',
        element: <Main isAdmin={false} />, children: [
            { path: '', element: <Anwesenheit /> },
            { path: 'error/:message', element: <Error /> }
        ]
    },
    {
        path: '/admin',
        element: <Main isAdmin={true} />, children: [
            {
                path: 'Klassen',
                element: <Klassen />, children: [{ path: 'error/:message', element: <Error /> }]
            },
            {
                path: 'Klassen/Neu',
                element: <KlassenNeu />, children: [{ path: 'error/:message', element: <Error /> }]
            },
            {
                path: 'Klassen/:id',
                element: <Klassen />, children: [{ path: 'error/:message', element: <Error /> }]
            },
            {
                path: 'Klassen/:id/Edit',
                element: <KlassenEdit />, children: [{ path: 'error/:message', element: <Error /> }]
            },
            {
                path: 'Teilnehmer',
                element: <Teilnehmer />, children: [{ path: 'error/:message', element: <Error /> }]
            },
            {
                path: 'Teilnehmer/Neu',
                element: <TeilnehmerNeu />, children: [{ path: 'error/:message', element: <Error /> }]
            },
            {
                path: 'Teilnehmer/:id',
                element: <Teilnehmer />, children: [{ path: 'error/:message', element: <Error /> }]
            },
            {
                path: 'Teilnehmer/:id/Edit',
                element: <TeilnehmerEdit />, children: [{ path: 'error/:message', element: <Error /> }]
            },
            {
                path: 'QR',
                element: <QR />, children: [{ path: 'error/:message', element: <Error /> }]
            },
            {
                path: 'Setup',
                element: <Setup />, children: [{ path: 'error/:message', element: <Error /> }]
            },
            {
                path: 'error/:message',
                element: <Error />
            }
        ]
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