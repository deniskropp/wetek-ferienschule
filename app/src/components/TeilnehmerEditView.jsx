import React, { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

function linkTo(id,to) {
    if (to !== undefined)
        return `/Teilnehmer/${id}/${to}`
    
    return `/Teilnehmer/${id}`
}

export function TeilnehmerEditView({id}) {
    const [teilnehmer, setTeilnehmer] = useState(null)
    const [formValues, setFormValues] = useState({});

    useEffect(() => {
        fetch(`https://ferienschule.violass.club:444/api/Teilnehmer.php?id=${id}`)
        .then((data) => data.json())
        .then((json) => {
            setTeilnehmer(json[0])
        })
    }, [setTeilnehmer,id])

    if (!teilnehmer)
        return <div></div>

    
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formValues)
    }

    return (
      <Paper>
        <Container>
        <form method="POST" onSubmit={handleSubmit}>
            <table>
                <tr>
                    <th>Name</th>
                    <td><TextField variant="standard" name="Name" value={teilnehmer.Name} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <th>Vorname</th>
                    <td><TextField variant="standard" name="Vorname" value={teilnehmer.Vorname} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <th>Klasse</th>
                    <td><TextField variant="standard" name="Klasse" value={teilnehmer.Klasse} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td><TextField variant="standard" name="Email" value={teilnehmer.Email} onChange={handleChange} /></td>
                </tr>
            </table>
            <div className="container">
                <ButtonGroup>
                    <Button type="submit" variant="contained" color="primary">OK</Button>
                    <Button type="cancel" variant="contained" color="secondary">Abbrechen</Button>
                </ButtonGroup>
            </div>
        </form>
        </Container>
      </Paper>
    )
}
