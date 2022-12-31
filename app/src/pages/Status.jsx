
import { useEffect, useState } from 'react'
import { useMe } from '../Me'

const req = {
    target: 'Teilnehmer.me',
    data: {}
}

export function Status() {
    const me = useMe()
    const [ dump, setDump ] = useState('...')

    useEffect(() => {
        async function update() {
            const res = await me.makeRequest('User', req)

            setDump(JSON.stringify(res, null, 4))
        }

        update()
    }, [me,setDump])

    return (
        <div>
            <div>
                <h4>{me.api.url}</h4>
                <h4>{me.token}</h4>
            </div>
            <div>
                <h4>{req.target}</h4>
                <pre>{dump}</pre>
            </div>
        </div>
    )
}
