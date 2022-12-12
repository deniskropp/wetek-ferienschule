import { useState, useEffect } from 'react'

import Container from '@mui/material/Container'


export function KlassenView({ id }) {
    const [klasse, setKlasse] = useState(null)

    useEffect(() => {
        fetch(`https://ferienschule.violass.club:444/api/Klassen.php?id=${id}`)
            .then((data) => data.json())
            .then((json) => {
                setKlasse(json[0])
            })
    }, [setKlasse, id])

    if (!klasse)
        return <Container>Lade...</Container>


    return (
        <Container>
            <table>
                <tr>
                    <th>Name</th>
                    <td>{klasse.Name}</td>
                </tr>
                <tr>
                    <th>Schule</th>
                    <td>{klasse.Schule}</td>
                </tr>
            </table>
        </Container>
    )
}
