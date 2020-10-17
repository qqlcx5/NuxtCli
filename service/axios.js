import axios from 'axios'
import qs from 'qs'
import { getToken } from '~/utils/auth'

const instance = axios.create({
    baseURL: '/api',
    timeout: 5000,
})

// 开始修改请求数据
instance.defaults.transformRequest = [
    (data, header) => {
        const headerThis = header
        headerThis.token = getToken()
        if (!header['Content-Type']) {
            return qs.stringify(data)
        }
        return data
    },
]
instance.interceptors.request.use(
    (config) => {
        return config
    },
    (err) => Promise.reject(err)
)
instance.interceptors.response.use(
    (response) => {
        return response.data
    },
    (err) => {
        return Promise.reject(err)
    }
)
export default instance
