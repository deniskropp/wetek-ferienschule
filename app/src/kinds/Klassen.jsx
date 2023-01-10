import { TextElement } from '../lib/Elements'


export const Klassen = {
    kind() {
        return {
            name: 'Klassen',
            fields: [
                {
                    name: 'Name',
                    element: TextElement
                },
                {
                    name: 'Schule',
                    element: TextElement
                }
            ]
        }
    }
}
