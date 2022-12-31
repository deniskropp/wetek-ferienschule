import { ItemView } from './ItemView'
import { Loading } from './Loading'

import { useTarget } from '../Me'


export function KlassenView({ id }) {
    const [me, klasse] = useTarget('User', (id !== undefined) ?
        { target: 'Klassen.get', data: { id } } :
        { target: 'Klassen.me', data: {} })

    if (!klasse)
        return <Loading />

    return (
        <ItemView object={klasse} fields={['Name', 'Schule']} />
    )
}
