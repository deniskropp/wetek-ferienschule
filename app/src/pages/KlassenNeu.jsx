import Stack from '@mui/material/Stack'

import { ItemNeuView } from '../components/ItemNeuView'


export function KlassenNeu() {
    return (
        <Stack sx={{ padding: 1 }}>
            <ItemNeuView itemName="Klassen" itemFields={['Name', 'Schule']} />
        </Stack>
    )
}
