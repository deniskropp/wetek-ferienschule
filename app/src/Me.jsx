import axios from 'axios'

class Me {
    constructor({ api, token }) {
        this.api = api
        this.token = token ? token : localStorage.getItem('token')

        //const axios_instance = axios.create({
        //    baseURL: 'https://ferienschule.violass.club:444/api/',
        //    timeout: 5000,
        //    headers: { 'Authorization': `Bearer ${token}` }
        //});
    }

    hasToken() {
        if (this.token === undefined || this.token === null)
            return false

        if (this.token === '')
            return false

        return true
    }

    async authenticate(code) {
        const options = {
            method: 'POST',
            url: this.api.url + '/Authenticate.php',
            headers: {
                accept: 'application/json'
            },
            data: {
                code: code
            }
        }

        try {
            const res = await axios.request(options)

            localStorage.setItem('token', res.data.token)

            this.token = res.data.token

            return res.data
        }
        catch (err) {
            console.log(err)

            return { message: err, data: {} }
        }
    }

    async requestCode(email) {
        const options = {
            method: 'POST',
            url: this.api.url + '/Email.php',
            headers: {
                accept: 'application/json'
            },
            data: {
                email: email
            }
        }

        try {
            const res = await axios.request(options)

            return res.data
        }
        catch (err) {
            console.log(err)

            return { message: err, data: {} }
        }
    }

    async postUser(target, data) {
        const options = {
            method: 'POST',
            url: this.api.url + '/User.php',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${this.token}`
            },
            data: {
                target: target,
                data: data
            }
        }

        try {
            const res = await axios.request(options)

            console.log(res)

            return res.data
        }
        catch (err) {
            console.log(err)

            return { message: err, data: {} }
        }
    }
}

export function useMe() {
    return new Me({
        api: {
            url: 'http://localhost:8080/api'
        }
    })
}
