import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'

import './Home.css'


import axios from 'axios'

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

const options = {
  method: 'GET',
  url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
//  params: {category: 'science'},
  headers: {
    accept: 'application/json',
    'X-RapidAPI-Key': '5814dd808fmsh325af6e3af961f7p18ed22jsn60b3de6b5df9',
    'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
  }
};

export function Home() {
    const [norris, setNorris] = useState({ value: "lade..." })

    const getChuck = async () => {
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

    return (
        <div className="Home-body">
            <Paper elevation={5}>
                <h2>Herzlich willkommen!</h2>

                <Button fullWidth variant="text" size="small" color="primary" onClick={getChuck}>
                    {norris.value}
                </Button>
            </Paper>
        </div>
    )
} 