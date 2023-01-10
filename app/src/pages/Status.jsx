import { useEffect, useState } from 'react'

import { useMe, useTarget } from '../Me'


export function Status() {
    /*
        const me = useMe()
        const [dump, setDump] = useState('...')
    
        useEffect(() => {
            async function update() {
                const response = await me.makeRequest('User', { target: 'Teilnehmer.me' })
    
                if (response.success())
                    setDump(JSON.stringify(response, null, 4))
            }
    
            update()
        }, [me, setDump])
    */

    const [me, dump] = useTarget('User', { target: 'Teilnehmer.me' })

    return (
        <div>
            <div>
                <h4>me.api.url</h4>
                <pre>{me.api.url}</pre>

                <h4>me.token</h4>
                <pre>{me.token}</pre>

                <h4>Teilnehmer.me</h4>
                <pre>{dump ? JSON.stringify(dump, null, 4) : '...'}</pre>
            </div>
        </div>
    )
}
