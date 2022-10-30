import React, { Link, useState, useEffect } from 'react'
import Button from '@mui/material/Button';

export function TeilnehmerListView() {
    const [teilnehmers, setTeilnehmers] = useState(null)

    useEffect(() => {
        fetch(`http://a.violass.club:4000/api/Teilnehmer.php`)
        .then((data) => data.json())
        .then((json) => {
            setTeilnehmers(json)
            console.log(json)
        })
    }, [setTeilnehmers])

    return (
        <div className="TeilnehmerList">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Vorname</th>
                    <th>Klasse</th>
                    <th>Email</th>
                </tr>
                {teilnehmers ? teilnehmers.map((teilnehmer) =>
                    
                        <tr>
                        <td><a href={`/Teilnehmer?id=${teilnehmer.id}`}>{teilnehmer.Name}</a></td>
                        <td><a href={`/Teilnehmer?id=${teilnehmer.id}`}>{teilnehmer.Vorname}</a></td>
                        <td><a href={`/Teilnehmer?id=${teilnehmer.id}`}>{teilnehmer.Klasse}</a></td>
                        <td><a href={`/Teilnehmer?id=${teilnehmer.id}`}>{teilnehmer.Email}</a></td>
                        <td><Button className="btn" variant="contained">Bearbeiten</Button></td>
                        </tr>
                    
                ) : ''}
            </table>
        </div>
    )
}
