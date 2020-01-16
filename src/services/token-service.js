import config from '../config';

const TokenService = {
    saveAuthToken(token) {
        window.sessionStorage.setItem(config.TOKEN_KEY, token)
    },
    saveAccountToken(token) {
        window.sessionStorage.setItem(config.ACCOUNT_TOKEN_KEY, token)
    },
    getAuthToken() {
        return window.sessionStorage.getItem(config.TOKEN_KEY)
    },
    getAccountToken() {
        return window.sessionStorage.getItem(config.ACCOUNT_TOKEN_KEY)
    },
    clearAuthToken() {
        window.sessionStorage.removeItem(config.TOKEN_KEY)
    },
    clearAccountToken() {
        window.sessionStorage.removeItem(config.ACCOUNT_TOKEN_KEY)
    },
    hasAuthToken() {
        return !!TokenService.getAuthToken()
    },
    hasAccountToken() {
        return !!TokenService.getAccountToken()
    },
    makeBasicAuthToken(userEmail, password) {
        return window.btoa(`${userEmail}:${password}`)
    },
};

export default TokenService;