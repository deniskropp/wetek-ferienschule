import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

import { useMe } from '../Me'


export function ItemNeuView({ kind }) {
    const navigate = useNavigate()
    const me = useMe()
    const [item, setItem] = useState({})

    const handleChange = (event) => {
        const { name, value } = event.target

        setItem({
            ...item,
            [name]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        async function doUpdate() {
            const response = await me.makeRequest('User', {
                target: `${kind.name}.post`,
                data: item
            })

            if (response.success())
                navigate(-1)
        }

        doUpdate()
    }

    const handleReset = (event) => {
        event.preventDefault()

        navigate(-1)
    }

    return (
        <Container sx={{ padding: 1 }}>
            <form method="POST" onSubmit={handleSubmit} onReset={handleReset}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 450 }} size="small">
                        <TableBody>
                            {kind.fields.map((field, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        {field.label ? field.label : field.name}
                                    </TableCell>
                                    <TableCell>
                                        {field.element(field, item, handleChange)}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
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
