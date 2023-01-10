import { ItemView } from './ItemView'
import { Loading } from './Loading'

import { useTarget } from '../Me'


export function KlassenView({ id }) {
    const [me, klasse] = useTarget('User', id ? {
        target: 'Klassen.get',
        data: { id }
    } : { target: 'Klassen.me' })

    if (!klasse)
        return <Loading />

    return (
        <ItemView item={klasse} fields={['Name', 'Schule']} />
    )
}
