import Stack from '@mui/material/Stack'

import { Loading } from '../components/Loading'
import { ItemNeuView } from '../components/ItemNeuView'

import { Teilnehmer } from '../kinds/Teilnehmer'

import { useTarget } from '../Me'


export function TeilnehmerNeu() {
    const [me, klassen] = useTarget('User', { target: 'Klassen.all' })

    if (!klassen)
        return <Loading />

    return (
        <Stack sx={{ padding: 0 }}>
            <ItemNeuView kind={Teilnehmer.kind(klassen)} />
        </Stack>
    )
}
