import { useParams } from 'react-router-dom'

import Stack from '@mui/material/Stack'

import { TeilnehmerEditView } from '../components/TeilnehmerEditView'


export function TeilnehmerEdit() {
    const { id } = useParams()

    return (
        <Stack sx={{ padding: 0 }}>
            <TeilnehmerEditView id={id} />
        </Stack>
    )
}
