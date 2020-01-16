import config from '../config';

const UserApiService = {
    postRegistration(newUser) {
        return fetch(`${config.API_BASE_URL}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postDonation(donation, authToken) {
        return fetch(`${config.API_BASE_URL}/user/donation`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(donation),
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getAllDonations(authToken) {
        return fetch(`${config.API_BASE_URL}/user/donation`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authToken}`,
            }
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postAccount(newAccount, authToken) {
        return fetch(`${config.API_BASE_URL}/user/account`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAccount)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getAccount(authToken) {
        return fetch(`${config.API_BASE_URL}/user/account`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    getTransactions(authToken) {
        return fetch(`${config.API_BASE_URL}/user/transaction`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postRoundup(newRoundup, authToken) {
        return fetch(`${config.API_BASE_URL}/user/roundup`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRoundup)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getRoundups(authToken) {
        return fetch(`${config.API_BASE_URL}/user/roundup`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
};

export default UserApiService;