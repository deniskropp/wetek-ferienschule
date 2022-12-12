import { useState, useEffect } from 'react'

import Container from '@mui/material/Container'


export function TeilnehmerView({ id }) {
    const [teilnehmer, setTeilnehmer] = useState(null)

    useEffect(() => {
        fetch(`https://ferienschule.violass.club:444/api/Teilnehmer.php?id=${id}`)
            .then((data) => data.json())
            .then((json) => {
                setTeilnehmer(json[0])
            })
    }, [setTeilnehmer, id])

    if (!teilnehmer)
        return <Container>Lade...</Container>


    return (
        <Container>
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
                    <th>Email</th>
                    <td>{teilnehmer.Klasse}</td>
                </tr>
                <tr>
                    <th>Klasse</th>
                    <td>{teilnehmer.Email}</td>
                </tr>
            </table>
        </Container>
    )
}
