export class Response {
    constructor({ status, message, data, log }) {
        this.status = status
        this.message = message
        this.data = data
        this.log = log
    }

    success() {
        return this.status === 'OK'
    }

    logs() {
        return this.log.map(l => String(l).replace(/\n/g, '\n          ')).join('\n')
    }
}
