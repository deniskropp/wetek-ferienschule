import { useParams } from 'react-router-dom'

import Stack from '@mui/material/Stack'

import { KlassenListView } from '../components/KlassenListView'
import { KlassenView } from '../components/KlassenView'


export function Klassen() {
    const { id } = useParams()

    return (
        <Stack sx={{ padding: 1 }}>
            {(id !== undefined) ? <KlassenView id={id} /> : <KlassenListView />}
        </Stack>
    )
}
