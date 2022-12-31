import { Link } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'

import EditIcon from '@mui/icons-material/Edit'
import InstallMobileIcon from '@mui/icons-material/InstallMobile'


export function NavBar({ isAdmin }) {
    if (isAdmin)
        return (
            <AppBar position="static">
                <Toolbar>
                    <Divider orientation="vertical" variant="inset" />
                    <Link to="/admin/Klassen/">
                        <Button variant="contained" color="info">
                            <EditIcon />
                            Klassen
                        </Button>
                    </Link>
                    <Divider orientation="vertical" variant="middle" />
                    <Link to="/admin/Teilnehmer/">
                        <Button variant="contained" color="info">
                            <EditIcon />
                            Teilnehmer
                        </Button>
                    </Link>
                    <Divider orientation="vertical" variant="middle" />
                    <Link to="/admin/Setup">
                        <Button variant="contained" color="info">
                            <InstallMobileIcon />
                            Setup
                        </Button>
                    </Link>
                    <Divider orientation="vertical" variant="inset" />
                </Toolbar>
            </AppBar>
        )

    return (
        <AppBar position="static">
            <Toolbar>
            </Toolbar>
        </AppBar>
    )
}