import { ItemView } from './ItemView'
import { Loading } from './Loading'

import { useTarget } from '../Me'


export function TeilnehmerView({ id }) {
    const [me, teilnehmer] = useTarget('User', (id !== undefined) ?
        { target: 'Teilnehmer.get', data: { id } } :
        { target: 'Teilnehmer.me', data: {} })

    if (!teilnehmer)
        return <Loading />

    return (
        <ItemView object={teilnehmer} fields={['Name', 'Vorname', 'Klasse', 'Email']} />
    )
}
