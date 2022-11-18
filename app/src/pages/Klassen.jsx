import { useParams } from 'react-router-dom'

import { KlassenListView } from '../components/KlassenListView'
import { KlassenView } from '../components/KlassenView'


export function Klassen() {
    const { id } = useParams()

    if (id !== undefined)
        return <div className="container">
                <KlassenView id={id} />
            </div>

    return <div className="container">
            <KlassenListView />
        </div>
}
