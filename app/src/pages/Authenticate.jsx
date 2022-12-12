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

    useEffect(() => {
        async function run() {
            const status = await me.authenticate(code)

            navigate(status.quo)
        }

        run()
    })

    return <div />
}
