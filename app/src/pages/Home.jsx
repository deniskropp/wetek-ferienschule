import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'


import axios from 'axios'

/*
const categories = [
    "animal",
    "career",
    "celebrity",
    "dev",
    "explicit",
    "fashion",
    "food",
    "history",
    "money",
    "movie",
    "music",
    "political",
    "religion",
    "science",
    "sport",
    "travel"
  ]
*/
export function Home({ message = 'Herzlich willkommen!' }) {
    const [norris, setNorris] = useState({ value: "..." })

    const getChuck = async () => {
        const options = {
            method: 'GET',
            url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
            params: { category: 'dev' },
            headers: {
                accept: 'application/json',
                'X-RapidAPI-Key': '5814dd808fmsh325af6e3af961f7p18ed22jsn60b3de6b5df9',
                'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
            }
        }

        const res = await axios.request(options)

        setNorris(res.data)
    }

    useEffect(() => {
        const timerId = setInterval(() => {
            getChuck()
        }, 12000);

        setTimeout(() => {
            getChuck()
        }, 500);

        return () => {
            clearInterval(timerId)
        }
    }, [])

    const handleChuck = () => {
        // FIXME: reset interval when clicked
        getChuck()
    }

    return (
        <Stack sx={{ margin: '1px' }}>
            <Paper elevation={2}>
                <Typography variant="h4" component="h2" align="center" gutterBottom>
                    {message}
                </Typography>

                <Button variant="text" size="small" color="neutral" onClick={handleChuck}>
                    {norris.value}
                </Button>
            </Paper>
        </Stack>
    )
} 