import CheckIcon from '@mui/icons-material/Check'
import Container from '@mui/material/Container'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { Loading } from './Loading'

import { useTarget } from '../Me'


export function AnwesenheitListView({ id }) {
	const [me, anwesenheit] = useTarget('User', id ? {
		target: 'Anwesenheit.get',
		data: { id }
	} : { target: 'Anwesenheit.me' })

	if (!anwesenheit)
		return <Loading />

	return (
		<Container sx={{ padding: 1 }}>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 450 }} size="small">
					<TableHead>
						<TableRow>
							<TableCell>Datum</TableCell>
							<TableCell>Status</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{anwesenheit && anwesenheit.map((row) => (
							<TableRow key={row.Datum}>
								<TableCell>{row.Datum}</TableCell>
								<TableCell><CheckIcon /></TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	)
}
