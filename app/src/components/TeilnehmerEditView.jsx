import { useState, useEffect } from 'react'

import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'


export function TeilnehmerEditView({ id }) {
    const [teilnehmer, setTeilnehmer] = useState(null)
    const [formValues, setFormValues] = useState({})

    useEffect(() => {
        fetch(`https://ferienschule.violass.club:444/api/Teilnehmer.php?id=${id}`)
            .then((data) => data.json())
            .then((json) => {
                setTeilnehmer(json[0])
            })
    }, [setTeilnehmer, id])

    if (!teilnehmer)
        return <Container>Lade...</Container>


    const handleChange = (event) => {
        const { name, value } = event.target

        setFormValues({
            ...formValues,
            [name]: value,
        })

        setTeilnehmer({ ...teilnehmer, ...formValues })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(formValues, teilnehmer)
    }

    return (
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
    )
}
