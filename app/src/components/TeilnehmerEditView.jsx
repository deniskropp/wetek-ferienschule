import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'

import { Loading } from './Loading'

import { useTarget } from '../Me'


export function TeilnehmerEditView({ id }) {
    const navigate = useNavigate()
    const [me, teilnehmer, setTeilnehmer] = useTarget('User', { target: 'Teilnehmer.get', data: { id } })

    if (!teilnehmer)
        return <Loading />


    const handleChange = (event) => {
        const { name, value } = event.target

        setTeilnehmer({
            ...teilnehmer,
            [name]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        async function doUpdate() {
            const res = await me.makeRequest('User', {target: 'Teilnehmer.put', data: teilnehmer})

            if (res.message === '')
                navigate(-1)
        }

        doUpdate()
    }

    const handleReset = (event) => {
        event.preventDefault()

        navigate(-1)
    }

    return (
        <Container>
            <form method="POST" onSubmit={handleSubmit} onReset={handleReset}>
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
                        <Button type="reset" variant="contained" color="secondary">Abbrechen</Button>
                    </ButtonGroup>
                </div>
            </form>
        </Container>
    )
}
