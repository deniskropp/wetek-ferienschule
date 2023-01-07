import Stack from '@mui/material/Stack'

import { ItemNeuView } from '../components/ItemNeuView'


export function TeilnehmerNeu() {
    return (
        <Stack sx={{ padding: 1 }}>
            <ItemNeuView itemName="Teilnehmer" itemFields={['Name', 'Vorname', 'Klassen_id', 'Email']} />
        </Stack>
    )
}
