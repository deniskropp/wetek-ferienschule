import { useParams } from 'react-router-dom'

import { TeilnehmerEditView } from '../components/TeilnehmerEditView'


export function TeilnehmerEdit() {
    const { id } = useParams()

    return <TeilnehmerEditView id={id} />
}
