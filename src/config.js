export default {
    TOKEN_KEY: 'roots-client-auth-token',
    PLAID_PUBLIC_KEY: process.env.REACT_APP_PLAID_PUBLIC_KEY,
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api'
}