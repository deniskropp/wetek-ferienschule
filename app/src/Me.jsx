import { createContext, useContext } from 'react'
import { useState, useEffect } from 'react'

import axios from 'axios'

import { Response } from './lib/Response'

import { setup } from './setup'


const Context = createContext()


export const Provider = ({ children }) => {
    const me = new Me(setup)

    return (
        <Context.Provider value={me}>
            {children}
        </Context.Provider>
    )
}

export class Me {
    constructor({ api, token }) {
        this.api = api
        this.token = token ? token : localStorage.getItem('token')
    }

    hasToken() {
        if (this.token === undefined || this.token === null)
            return false

        if (this.token === '')
            return false

        return true
    }

    setToken(token) {
        localStorage.setItem('token', token)

        this.token = token
    }

    delToken() {
        localStorage.removeItem('token')

        this.token = null
    }

    async isAdmin() {
        if (!this.hasToken())
            return false

        const response = await this.makeRequest('User', {target: 'Me.isAdmin', data: {}})

        if (!response.success())
            return false

        return response.data.isAdmin
    }

    async makeRequest(api, payload) {
        const options = {
            method: 'POST',
            url: this.api.url + '/' + api + '.php',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${this.token}`
            },
            data: payload
        }

        const res = await axios.request(options)

        return new Response(res.data)
    }
}

export function useMe() {
    const me = useContext(Context)

    return me
}

export function useTarget(api, payload) {
    const me = useMe()
    const [data, setData] = useState(null)

    useEffect(() => {
        async function load() {
            const response = await me.makeRequest(api, payload)

            if (response.success())
                setData(response.data)
            else
                console.error(response.message)
        }

        load()
    }, [api, payload, me, setData])

    return [me, data, setData]
}
