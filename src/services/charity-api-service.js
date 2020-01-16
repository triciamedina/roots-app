import config from '../config';

const CharityApiService = {
    formatQueryParams(params) {
        const queryItems = Object.keys(params)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);

        return queryItems.join('&');
    },
    getCharities(zip, authToken) {
        const params = {
            zip,
            max: 10,
            index: 0
        };
        
        const queryString = CharityApiService.formatQueryParams(params);

        return fetch(`${config.API_BASE_URL}/charity?` + queryString, {
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

export default CharityApiService;