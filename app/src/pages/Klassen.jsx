import { Outlet, useParams } from 'react-router-dom'

import Stack from '@mui/material/Stack'

import { ItemListView } from '../components/ItemListView'
import { KlassenView } from '../components/KlassenView'


export function Klassen() {
    const { id } = useParams()

    return (
        <Stack sx={{ padding: 0 }}>
            <Outlet />
            {(id !== undefined) ? <KlassenView id={id} /> : <ItemListView itemName="Klassen" itemFields={['Name', 'Schule']} />}
        </Stack>
    )
}
