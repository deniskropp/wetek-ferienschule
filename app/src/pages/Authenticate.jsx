import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { useMe } from '../Me'

export function Authenticate({ redirectTo = '/' }) {
    const { code } = useParams()
    const me = useMe()
    const navigate = useNavigate()

    if (code === undefined) {
        throw new Error('no code')
    }

    me.delToken()

    useEffect(() => {
        async function run() {
            const res = await me.makeRequest('Authenticate', {code})

            console.log(res)

            me.setToken(res.data.token)

            navigate(redirectTo)
        }

        run()
    })

    return <div />
}
