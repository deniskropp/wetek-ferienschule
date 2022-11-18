import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Divider from '@mui/material/Divider'
import AppBar from '@mui/material/AppBar'

export function NavBar() {
    return (
        <AppBar position="static">
            <ButtonGroup>
                <Divider orientation="vertical" variant="inset" />
                <Link to="/admin/Klassen">
                    <Button variant="contained" color="neutral">
                        Klassen
                    </Button>
                </Link>
                <Divider orientation="vertical" variant="middle" />
                <Link to="/admin/Teilnehmer">
                    <Button variant="contained" color="neutral">
                        Teilnehmer
                    </Button>
                </Link>
                <Divider orientation="vertical" variant="middle" />
                <Link to="/admin/Upload">
                    <Button variant="contained" color="neutral">
                        Upload
                    </Button>
                </Link>
                <Divider orientation="vertical" variant="inset" />
            </ButtonGroup>
        </AppBar>
    )
}