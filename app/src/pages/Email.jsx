import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


export function Email() {
    const { id } = useParams()
    const [url, setURL] = useState('')
    const [formValues, setFormValues] = useState({});
    
    const handleChange = (e) => {
      const { name, value } = e.target;

      setFormValues({
        ...formValues,
        [name]: value,
      });
    };
  
    if (id === undefined) {
        const inputProps = {
            step: 300,
        };

        const handleSubmit = (event) => {
            event.preventDefault();

            console.log(formValues)

            fetch(`https://ferienschule.violass.club:444/api/Email.php`,{
                method: 'POST',
                body: JSON.stringify(formValues)
            })
            .then((data) => {
                setURL(JSON.stringify(data))
            })
        };
          
        return (
            <Paper>
                <Container>
                    <form method="POST" onSubmit={handleSubmit}>
                        <Stack>
                            Hier kannst Du Deine E-mail Adresse angeben, um einen Zugang zu erhalten.
                            <h3>Email</h3>
                            <TextField name="email" inputProps={inputProps} onChange={handleChange} />
                            <Button type={'submit'} color={'primary'}>E-Mail versenden</Button>
                            {url}
                        </Stack>
                    </form>
                </Container>
            </Paper>
        )
    }

    return <div className="container">
            <code>{url}</code>
        </div>
}
