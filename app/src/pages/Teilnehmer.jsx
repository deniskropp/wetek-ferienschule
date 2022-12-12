import { useParams } from 'react-router-dom'

import { TeilnehmerListView2 } from '../components/TeilnehmerListView2'
import { TeilnehmerView } from '../components/TeilnehmerView'


export function Teilnehmer() {
    const { id } = useParams()

    if (id !== undefined)
        return <TeilnehmerView id={id} />

    return <TeilnehmerListView2 />
}
