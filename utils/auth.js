const TokenKey = 'Admin-Token'
// const Cookie = process.client ? require('js-cookie') : null
const Cookie = require('js-cookie')
export function getToken() {
    return Cookie.get(TokenKey)
}

export function setToken(token) {
    return Cookie.set(TokenKey, token)
}

export function removeToken() {
    return Cookie.remove(TokenKey)
}

export function getCurrentAuthority() {
    // return ["user"];
    return ['user']
}
export function check(authority) {
    const current = getCurrentAuthority()
    return current.some((item) => authority.includes(item))
}
export function isLogin() {
    const current = getCurrentAuthority()
    return current && current[0] !== 'guest'
}
