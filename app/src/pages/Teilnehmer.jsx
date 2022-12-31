import { useParams } from 'react-router-dom'

import Stack from '@mui/material/Stack'

import { TeilnehmerListView2 } from '../components/TeilnehmerListView2'
import { TeilnehmerView } from '../components/TeilnehmerView'


export function Teilnehmer() {
    const { id } = useParams()

    return (
        <Stack sx={{ padding: 1 }}>
            {(id !== undefined) ? <TeilnehmerView id={id} /> : <TeilnehmerListView2 />}
        </Stack>
    )
}
