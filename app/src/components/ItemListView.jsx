import { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
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

export function ItemListView({ itemName, itemFields }) {
    const [me, items, setItems] = useTarget('User', { target: `${itemName}.all` })

    const [open, setOpen] = useState(false)
    const [row, setRow] = useState(null)

    const handleClickOpen = (row) => {
        setRow(row)
        setOpen(true)
    }

    const handleClose = (value) => {
        setOpen(false)

        async function doDelete(id) {
            const res = await me.makeRequest('User', {
                target: `${itemName}.delete`,
                data: { id }
            })

            if (res.success())
                setItems(items.filter((e) => e.id !== id))
        }

        if (value !== undefined)
            doDelete(value)
    }

    if (!items)
        return <Loading />

    return (
        <Stack sx={{ padding: 0 }}>
            <SimpleDialog
                open={open}
                row={row}
                onClose={handleClose}
            />
            <Toolbar>
                <Link to={`/admin/${itemName}/Neu`}>
                    <Button variant="contained" color="neutral">
                        <EditIcon />
                        Neu
                    </Button>
                </Link>
                <Divider orientation="vertical" variant="middle" />
                <Link to={`/admin/${itemName}/Import`}>
                    <Button variant="contained" color="neutral">
                        <EditIcon />
                        Import
                    </Button>
                </Link>
                <Divider orientation="vertical" variant="middle" />
                <Link to={`/admin/${itemName}/Export`}>
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
                            {itemFields.map((field, index) => <TableCell key={index}>{field}</TableCell>)}
                            <TableCell key='other'>...</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items && items.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {itemFields.map((field, index) => (
                                    <TableCell key={index}>
                                        <Link to={linkTo(row.id)}>{row[field]}</Link>
                                    </TableCell>
                                ))}
                                <TableCell key='other'>
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
        </Stack>
    )
}