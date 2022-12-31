import { useParams } from 'react-router-dom'

import Stack from '@mui/material/Stack'

import { KlassenEditView } from '../components/KlassenEditView'


export function KlassenEdit() {
    const { id } = useParams()

    return (
        <Stack sx={{ padding: 1 }}>
            <KlassenEditView id={id} />
        </Stack>
    )
}
