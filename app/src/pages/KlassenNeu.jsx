import Stack from '@mui/material/Stack'

import { ItemNeuView } from '../components/ItemNeuView'

import { Klassen } from '../kinds/Klassen'


export function KlassenNeu() {
    return (
        <Stack sx={{ padding: 0 }}>
            <ItemNeuView kind={Klassen.kind()} />
        </Stack>
    )
}
