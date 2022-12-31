import { useState } from 'react'

import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { useMe } from '../Me'


export function Email() {
    const me = useMe()
    const [status, setStatus] = useState(null)
    const [formValues, setFormValues] = useState({})

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const response = await me.makeRequest('Email', {email: formValues.email})

        setStatus(response)
    }

    return (
        <form method="POST" onSubmit={handleSubmit}>
            {status ? (
                <Stack sx={{ margin: 1, padding: 1 }}>
                    <Typography variant="body1" component="h4" gutterBottom>
                        {status.message}
                    </Typography>
                </Stack>
            ) : (
                <Stack sx={{ margin: 1, padding: 1 }}>
                    <Typography variant="body1" component="h4" gutterBottom>
                        Hier kannst Du Deine E-mail Adresse angeben, um Zugangsdaten zu erhalten.
                    </Typography>
                    <TextField name="email" onChange={handleChange} />
                    <Button type={'submit'} color={'secondary'}>E-Mail versenden</Button>
                </Stack>
            )}
        </form>
    )
}
