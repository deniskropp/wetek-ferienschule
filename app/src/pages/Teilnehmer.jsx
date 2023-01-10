import { useParams } from 'react-router-dom'

import Stack from '@mui/material/Stack'

import { ItemListView } from '../components/ItemListView'
import { TeilnehmerView } from '../components/TeilnehmerView'


export function Teilnehmer() {
    const { id } = useParams()

    return (
        <Stack sx={{ padding: 0 }}>
            {(id !== undefined) ? <TeilnehmerView id={id} /> : <ItemListView itemName="Teilnehmer" itemFields={['Name', 'Vorname', 'Klasse', 'Email']} />}
        </Stack>
    )
}
