import config from '../config'

const UserApiService = {
    postRegistration(newUser) {
        return fetch(`${config.API_BASE_URL}/user`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
}

export default UserApiService