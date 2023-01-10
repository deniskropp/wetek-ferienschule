import { ItemEditView } from './ItemEditView'

import { Klassen } from '../kinds/Klassen'


export function KlassenEditView({ id }) {
    return (
        <ItemEditView id={id} kind={Klassen.kind()} />
    )
}
