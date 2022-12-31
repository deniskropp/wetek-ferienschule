export class Response {
    constructor({ status, message, data }) {
        this.status = status
        this.message = message
        this.data = data
    }

    success() {
        return this.status >= 200 && this.status < 300
    }
}
