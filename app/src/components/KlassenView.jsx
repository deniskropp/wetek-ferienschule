import React, { useState, useEffect } from 'react'

export function KlassenView({id}) {
    const [klassen, setKlassen] = useState(null)

    useEffect(() => {
        fetch(`https://ferienschule.violass.club:444/api/Klassen.php?id=${id}`)
        .then((data) => data.json())
        .then((json) => {
            setKlassen(json[0])
        })
    }, [setKlassen,id])

    if (!klassen)
        return <div></div>


    return (
        <div className="Klassen">
            <table>
                <tr>
                    <th>Name</th>
                    <td>{klassen.Name}</td>
                </tr>
                <tr>
                    <th>Schule</th>
                    <td>{klassen.Schule}</td>
                </tr>
            </table>
        </div>
    )
}
