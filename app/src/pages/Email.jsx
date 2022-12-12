import { useState } from 'react'

import { useMe } from '../Me'

import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'


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

        const response = await me.requestCode(formValues.email)

        setStatus(response)
    }

    return (
        <Container sx={{p:5}}>
            <Paper elevation={3}>
                <form method="POST" onSubmit={handleSubmit}>
                    {status ? (
                        <Stack mx={2} mt={1}>
                            <Typography variant="body1" component="h4" gutterBottom>
                                {status.message}
                            </Typography>
                        </Stack>
                    ) : (
                        <Stack mx={2} mt={1}>
                            <Typography variant="body1" component="h4" gutterBottom>
                                Hier kannst Du Deine E-mail Adresse angeben, um Zugangsdaten zu erhalten.
                            </Typography>
                            <TextField name="email" onChange={handleChange} />
                            <Button type={'submit'} color={'secondary'}>E-Mail versenden</Button>
                        </Stack>
                    )}
                </form>
            </Paper>
        </Container>
    )
}
