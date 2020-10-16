import https from '../axios'

// 获取公共接口
export function getCommonParam() {
    return new Promise((resolve, reject) => {
        https.get('/common/getCommonParam').then(
            (res) => {
                const result = Object.assign(res, {})
                resolve({
                    status: !result.code,
                    result,
                })
            },
            (err) => {
                reject(err)
            }
        )
    })
}
export function newsLatest() {
    return new Promise((resolve, reject) => {
        https.get('/news/latest').then(
            (res) => {
                const result = Object.assign(res, {})
                resolve({
                    status: !result.code,
                    result,
                })
            },
            (err) => {
                reject(err)
            }
        )
    })
}

// 获取错误码
export function getErrorCode() {
    return new Promise((resolve, reject) => {
        https.get('/common/getErrorCode').then(
            (res) => {
                const result = Object.assign(res, {})
                resolve({
                    status: !result.code,
                    result,
                })
            },
            (err) => {
                reject(err)
            }
        )
    })
}

// 获取banner列表
export function bannerList(param) {
    const params = param || {
        perPage: 6,
        v: new Date().getTime(),
    }
    return new Promise((resolve, reject) => {
        https.post('/commons/banner/list', params).then(
            (res) => {
                const result = Object.assign(res, {})
                resolve({
                    status: !result.code,
                    result,
                })
            },
            (err) => {
                reject(err)
            }
        )
    })
}

// 获取BTC网络状态
export function getBtcParams(params) {
    return new Promise((resolve, reject) => {
        https.post('/common/getBtcParams', params).then(
            (res) => {
                const result = Object.assign(res, {})
                resolve({
                    status: !result.code,
                    result,
                })
            },
            (err) => {
                reject(err)
            }
        )
    })
}

// 获取友情链接合作伙伴
export function getPartners(params) {
    return new Promise((resolve, reject) => {
        https.post('/common/getPartners', params).then(
            (res) => {
                const result = Object.assign(res, {})
                resolve({
                    status: !result.code,
                    result,
                })
            },
            (err) => {
                reject(err)
            }
        )
    })
}

// 获取服务器当前时间戳(秒)
export function getUnixTime() {
    return new Promise((resolve, reject) => {
        https.get('/common/getUnixTimeJson').then(
            (res) => {
                const result = Object.assign(res, {})
                resolve({
                    status: !result.code,
                    result,
                })
            },
            (err) => {
                reject(err)
            }
        )
    })
}
// 获取服务器当前时间戳(毫秒)
export function getTimestampJson() {
    return new Promise((resolve, reject) => {
        https.get('/common/getTimestampJson').then(
            (res) => {
                const result = Object.assign(res, {})
                resolve({
                    status: !result.code,
                    result,
                })
            },
            (err) => {
                reject(err)
            }
        )
    })
}
// 获取美元对人民币价格
export function getUsdCnyPrice() {
    return new Promise((resolve, reject) => {
        https.get('/common/getUsdCnyPrice').then(
            (res) => {
                const result = Object.assign(res, {})
                resolve({
                    status: !result.code,
                    result,
                })
            },
            (err) => {
                reject(err)
            }
        )
    })
}

// 获取常见问题
export function getCommonProblem(params) {
    return new Promise((resolve, reject) => {
        https.post('/common/getCommonProblem', params).then(
            (res) => {
                const result = Object.assign(res, {})
                resolve({
                    status: !result.code,
                    result,
                })
            },
            (err) => {
                reject(err)
            }
        )
    })
}

/** ssr请求的接口设置
 * ssr获取公共接口
 *
 * @export
 * @returns
 */
export function getCommonParamSSR() {
    return new Promise((resolve, reject) => {
        https.get('https://api.weminer.io/api/common/getCommonParam').then(
            (res) => {
                const result = Object.assign(res, {})
                resolve({
                    status: !result.code,
                    result,
                })
            },
            (err) => {
                reject(err)
            }
        )
    })
}

// ssr获取BTC网络状态
export function getBtcParamsSSR(params) {
    return new Promise((resolve, reject) => {
        https
            .post('https://api.weminer.io/api/common/getBtcParams', params)
            .then(
                (res) => {
                    const result = Object.assign(res, {})
                    resolve({
                        status: !result.code,
                        result,
                    })
                },
                (err) => {
                    reject(err)
                }
            )
    })
}

// 获取BTC减半参数
export function getReduceByHalf(params) {
    return new Promise((resolve, reject) => {
        https.post('/common/getReduceByHalf', params).then(
            (res) => {
                const result = Object.assign(res, {})
                resolve({
                    status: !result.code,
                    result,
                })
            },
            (err) => {
                reject(err)
            }
        )
    })
}
