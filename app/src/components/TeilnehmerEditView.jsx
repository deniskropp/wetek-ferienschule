import { ItemEditView } from './ItemEditView'


export function TeilnehmerEditView({ id }) {
    return (
        <ItemEditView id={id} itemName="Teilnehmer" itemFields={['Name', 'Vorname', 'Klasse', 'Email']} />
    )
}
