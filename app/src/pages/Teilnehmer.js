import { TeilnehmerView } from '../components/TeilnehmerView.js'

export function Teilnehmer({id}) {
    return <div className="container"><TeilnehmerView id={id} /></div>
}