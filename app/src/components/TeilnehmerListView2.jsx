import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Appbar from '@mui/material/Appbar'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Container from '@mui/material/Container'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Toolbar from '@mui/material/Toolbar'

import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

import { Loading } from './Loading'

import { useTarget } from '../Me'


function linkTo(id, to) {
    if (to !== undefined)
        return `${id}/${to}`

    return `${id}`
}

function SimpleDialog(props) {
    const { onClose, row, open } = props

    const handleClose = () => {
        onClose()
    };

    const handleCancel = () => {
        onClose()
    };

    const handleOk = () => {
        onClose(row.id)
    };

    if (row === null)
        return <div></div>

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>{row.Vorname} {row.Name} löschen?</DialogTitle>
            <DialogActions>
                <Button autoFocus onClick={handleCancel}>Nein</Button>
                <Button onClick={handleOk}>Ja</Button>
            </DialogActions>
        </Dialog>
    );
}

export function TeilnehmerListView2() {
    const [me, teilnehmer, setTeilnehmer] = useTarget('User', { target: 'Teilnehmer.all' })

    const [open, setOpen] = useState(false)
    const [row, setRow] = useState(null)

    const handleClickOpen = (row) => {
        setRow(row)
        setOpen(true)
    }

    const handleClose = (value) => {
        setOpen(false)

        async function doDelete(id) {
            const res = await me.postUser('Teilnehmer.delete', { id })

            if (res.message === '')
                setTeilnehmer(teilnehmer.filter((e) => e.id !== id))
        }

        if (value !== undefined)
            doDelete(value)
    }

    if (!teilnehmer)
        return <Loading />

    return (
        <Container sx={{ padding: 1 }}>
            <SimpleDialog
                open={open}
                row={row}
                onClose={handleClose}
            />
            <Toolbar>
                <Link to="/admin/Teilnehmer/Neu">
                    <Button variant="contained" color="neutral">
                        <EditIcon />
                        Neu
                    </Button>
                </Link>
                <Divider orientation="vertical" variant="middle" />
                <Link to="/admin/Teilnehmer/Import">
                    <Button variant="contained" color="neutral">
                        <EditIcon />
                        Import
                    </Button>
                </Link>
                <Divider orientation="vertical" variant="middle" />
                <Link to="/admin/Teilnehmer/Export">
                    <Button variant="contained" color="neutral">
                        <EditIcon />
                        Export
                    </Button>
                </Link>
            </Toolbar>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 450 }} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Vorname</TableCell>
                            <TableCell>Klasse</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>...</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {teilnehmer && teilnehmer.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell><Link to={row.id}>{row.Name}</Link></TableCell>
                                <TableCell><Link to={row.id}>{row.Vorname}</Link></TableCell>
                                <TableCell><Link to={row.id}>{row.Klasse}</Link></TableCell>
                                <TableCell><Link to={row.id}>{row.Email}</Link></TableCell>
                                <TableCell>
                                    <ButtonGroup>
                                        <Button size="small" color="primary" href={linkTo(row.id, "Edit")}><EditIcon /></Button>
                                        <Button size="small" color="neutral" onClick={() => handleClickOpen(row)}><DeleteIcon /></Button>
                                        <Button size="small" color="success" href={linkTo(row.id, "Menu")}><MoreHorizIcon /></Button>
                                    </ButtonGroup>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}