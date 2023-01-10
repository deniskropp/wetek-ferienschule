import { ItemView } from './ItemView'
import { Loading } from './Loading'

import { useTarget } from '../Me'


export function TeilnehmerView({ id }) {
    const [me, teilnehmer] = useTarget('User', id ? {
        target: 'Teilnehmer.get',
        data: { id }
    } : { target: 'Teilnehmer.me' })

    if (!teilnehmer)
        return <Loading />

    return (
        <ItemView item={teilnehmer} fields={['Name', 'Vorname', 'Klasse', 'Schule', 'Email']} />
    )
}
