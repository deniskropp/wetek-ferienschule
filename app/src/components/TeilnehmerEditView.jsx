import { Loading } from './Loading'
import { ItemEditView } from './ItemEditView'

import { Teilnehmer } from '../kinds/Teilnehmer'

import { useTarget } from '../Me'


export function TeilnehmerEditView({ id }) {
    const [me, klassen] = useTarget('User', { target: 'Klassen.all' })

    if (!klassen)
        return <Loading />

    return (
        <ItemEditView id={id} kind={Teilnehmer.kind(klassen)} />
    )
}
