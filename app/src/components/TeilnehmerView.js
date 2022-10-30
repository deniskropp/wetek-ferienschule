import React, { useState, useEffect } from 'react'

export function TeilnehmerView({id}) {
    const [teilnehmer, setTeilnehmer] = useState(null)

    useEffect(() => {
        fetch(`http://a.violass.club:4000/api/Teilnehmer.php?id=${id}`)
        .then((data) => data.json())
        .then((json) => {
            setTeilnehmer(json)
            console.log(json)
        })
    }, [setTeilnehmer,id])

    return (
        <div className="Teilnehmer">
            {teilnehmer ? (
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
            ) : ''}
        </div>
    )
}
