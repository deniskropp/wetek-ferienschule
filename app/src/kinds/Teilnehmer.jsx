import { TextElement, SelectElement } from '../lib/Elements'


export const Teilnehmer = {
    kind(klassen) {
        return {
            name: 'Teilnehmer',
            fields: [
                {
                    name: 'Name',
                    element: TextElement
                },
                {
                    name: 'Vorname',
                    element: TextElement
                },
                {
                    label: 'Klasse',
                    name: 'Klassen_id',
                    element: SelectElement,
                    choices: klassen
                },
                {
                    name: 'Email',
                    element: TextElement
                }
            ]
        }
    }
}
