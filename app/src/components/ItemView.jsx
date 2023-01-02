import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

export function ItemView({ item, fields }) {
    return (
        <Container sx={{ padding: 1 }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 450 }} size="small">
                    <TableBody>
                        {fields.map((field, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    {field}
                                </TableCell>
                                <TableCell>
                                    {item[field]}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}
