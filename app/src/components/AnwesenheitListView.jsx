import * as React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check'


export function AnwesenheitListView({id}) {
    const [anwesenheit, setAnwesenheit] = useState(null)

    useEffect(() => {
      fetch(`https://ferienschule.violass.club:444/api/Anwesenheit.php?id=${id}`)
      .then((data) => data.json())
      .then((json) => {
          setAnwesenheit(json)
      })
    }, [setAnwesenheit,id])


    const [teilnehmer, setTeilnehmer] = useState(null)

    useEffect(() => {
        fetch(`https://ferienschule.violass.club:444/api/Teilnehmer.php?id=${id}`)
        .then((data) => data.json())
        .then((json) => {
            setTeilnehmer(json[0])
        })
    }, [setTeilnehmer,id])


    if (!teilnehmer || !anwesenheit)
        return <div></div>


    return (
      <>
      <div className="container">
      <table>
      <tr>
          <th>Name</th>
          <td>{teilnehmer.Name}</td>
      </tr>
      <tr>
          <th>Vorname</th>
          <td>{teilnehmer.Vorname}</td>
      </tr>
      <tr>
          <th>Klasse</th>
          <td>{teilnehmer.Klasse}</td>
      </tr>
      </table>
      </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Datum</TableCell>
            <TableCell>...</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {anwesenheit.map((row) => (
            <TableRow
              key={row.Datum}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>{row.Datum}</TableCell>
                <TableCell><CheckIcon /></TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
