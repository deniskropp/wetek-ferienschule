import { useParams } from 'react-router-dom'

import Stack from '@mui/material/Stack'

//import { KlassenEditView } from '../components/KlassenEditView'
import { ItemEditView } from '../components/ItemEditView'

import { Klassen } from '../kinds/Klassen'


export function KlassenEdit() {
    const { id } = useParams()

    return (
        <Stack sx={{ padding: 0 }}>
{/*            <KlassenEditView id={id} />*/}
            <ItemEditView id={id} kind={Klassen.kind()} />
        </Stack>
    )
}
