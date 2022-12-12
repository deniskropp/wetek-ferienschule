import { useState, useEffect } from 'react'

import CheckIcon from '@mui/icons-material/Check'
import Container from '@mui/material/Container'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { useMe } from '../Me'


export function AnwesenheitListView({ id }) {
	const me = useMe()
	const [anwesenheit, setAnwesenheit] = useState(null)

	useEffect(() => {
		async function load() {
			const res = await me.postUser('Anwesenheit.get', { id: id })

			console.log(res)

			setAnwesenheit(res.data)
		}

		load()
	}, [setAnwesenheit, id])

	if (!anwesenheit)
		return <Container>Lade...</Container>


	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 450 }} size="small">
				<TableHead>
					<TableRow>
						<TableCell>Datum</TableCell>
						<TableCell>...</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{anwesenheit.map((row) => (
						<TableRow key={row.Datum}>
							<TableCell>{row.Datum}</TableCell>
							<TableCell><CheckIcon /></TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
