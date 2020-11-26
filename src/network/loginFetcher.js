import { API_URL } from '../network/api.config'

export const loginFetcher = (info, callback) => {
    const name = info.name
    const password = info.pwd
    fetch(API_URL + '/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        cache: 'no-cache',
        body: JSON.stringify({ name, password })

    })
        .then(res => {
            return res.json()
            // if (res.status !== 200) throw res.json()
            // else return res.json()
        })
        .then(data => {
            callback(null, data)
        })
        .catch(error => callback(null, error))
}