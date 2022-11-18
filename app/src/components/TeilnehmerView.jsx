import React, { useState, useEffect } from 'react'

export function TeilnehmerView({id}) {
    const [teilnehmer, setTeilnehmer] = useState(null)

    useEffect(() => {
        fetch(`https://ferienschule.violass.club:444/api/Teilnehmer.php?id=${id}`)
        .then((data) => data.json())
        .then((json) => {
            setTeilnehmer(json[0])
        })
    }, [setTeilnehmer,id])

    if (!teilnehmer)
        return <div></div>


    return (
        <div className="Teilnehmer">
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
        </div>
    )
}
