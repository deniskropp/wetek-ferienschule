import { ItemEditView } from './ItemEditView'


export function KlassenEditView({ id }) {
    return (
        <ItemEditView id={id} itemName="Klassen" itemFields={['Name', 'Schule']} />
    )
}
