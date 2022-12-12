//import * as React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Container from '@mui/material/Container'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'


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
  const [teilnehmer, setTeilnehmer] = useState(null)

  useEffect(() => {
    fetch(`https://ferienschule.violass.club:444/api/Teilnehmer.php`)
      .then((data) => data.json())
      .then((json) => {
        setTeilnehmer(json)
      })
  }, [setTeilnehmer])


  const [open, setOpen] = useState(false)
  const [row, setRow] = useState(null)

  const handleClickOpen = (row) => {
    setRow(row)
    setOpen(true)
  }

  const handleClose = (value) => {
    setOpen(false)

    if (value !== undefined) {
      fetch(`https://ferienschule.violass.club:444/api/TeilnehmerDelete.php?id=${value}`).then((x) => {
        setTeilnehmer(teilnehmer.filter((e) => e.id !== value))
      })
    }
  }

  if (teilnehmer === null)
    return <Container>Lade...</Container>

  return (
    <TableContainer component={Paper}>
      <SimpleDialog
        open={open}
        row={row}
        onClose={handleClose}
      />
      <Table sx={{ minWidth: 450 }} size="small" aria-label="simple table">
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
          {teilnehmer.map((row) => (
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
                  <Button size="small" color="secondary" onClick={() => handleClickOpen(row)}><DeleteIcon /></Button>
                  <Button size="small" color="success" href={linkTo(row.id, "Menu")}><MoreHorizIcon /></Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
