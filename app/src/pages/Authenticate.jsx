import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { Loading } from '../components/Loading'

import { useMe } from '../Me'

export function Authenticate({ redirectTo = '/' }) {
    const { code } = useParams()
    const me = useMe()
    const navigate = useNavigate()

    if (!code)
        throw new Error('no code')

    useEffect(() => {
        async function auth() {
            const response = await me.makeRequest('Authenticate', { code })

            if (response.success()) {
                me.setToken(response.data.token)

                navigate(redirectTo)
            }
        }

        me.delToken()

        auth()
    })

    return <Loading />
}
