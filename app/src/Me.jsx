import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import { Response } from './lib/Response'

import { setup } from './setup'


const Context = createContext()


export const Provider = ({ children }) => {
    const mysetup = {...setup}

    if (process.env.API_URL)
        mysetup.api_url = process.env.API_URL

    const me = new Me(mysetup)

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

        const response = await this.makeRequest('User', { target: 'Me.isAdmin' })

        if (response.success())
            return response.data.isAdmin

        return null
    }

    async makeRequest(api, payload) {
        const auth = this.hasToken() ? { Authorization: `Bearer ${this.token}` } : {}

        const options = {
            method: 'POST',
            url: this.api.url + '/' + api + '.php',
            headers: {
                accept: 'application/json',
                ...auth
            },
            data: payload
        }

        const res = await axios.request(options)


        const response = new Response(res.data)

        if (response.success())
            console.log(`me.makeRequest(${api})`, options, response)
        else
            console.error(`me.makeRequest(${api}) failed!`, options, response, res)

        console.log(response.logs())

        return response
    }
}

export function useMe() {
    const me = useContext(Context)

    return me
}

export function useTarget(api, payload) {
    const me = useMe()
    const navigate = useNavigate()
    const [data, setData] = useState(null)

    useEffect(() => {
        async function load() {
            const response = await me.makeRequest(api, payload)

            if (response.success())
                setData(response.data)
            else
                navigate(`error/${encodeURIComponent(response.message)}`)
        }

        load()
    }, [me, navigate, setData])

    return [me, data, setData]
}
