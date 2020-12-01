import { API_URL } from '../network/api.config'

export const newRegisterData = (info, callback) => {
    const userName = info.userName
    
    fetch(API_URL + '/register', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        cache: 'no-cache',
        // body: JSON.stringify({  })

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