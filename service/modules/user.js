import https from '../axios'

// 绑定手机或邮箱
export function binding(params) {
    return new Promise((resolve, reject) => {
        https.post('/user/binding', params).then(
            (res) => {
                let result = Object.assign(res, {})
                resolve({ status: !result.code, result })
            },
            (err) => {
                reject(err)
            }
        )
    })
}
// 获取用户充值收款信息
export function getReceiverInfo(params) {
    return new Promise((resolve, reject) => {
        https.post('/user/getReceiverInfo', params).then(
            (res) => {
                let result = Object.assign(res, {})
                resolve({ status: !result.code, result })
            },
            (err) => {
                reject(err)
            }
        )
    })
}

// 根据用户token获取用户信息
export function getUserProfile() {
    return new Promise((resolve, reject) => {
        https.get('/user/profile').then(
            (res) => {
                let result = Object.assign(res, {})
                resolve({ status: !result.code, result })
            },
            (err) => {
                reject(err)
            }
        )
    })
}
// 手机或邮箱密码登录接口
export function login(params) {
    return new Promise((resolve, reject) => {
        https.post('/user/login', params).then(
            (res) => {
                let result = Object.assign(res, {})
                resolve({ status: !result.code, result })
            },
            (err) => {
                reject(err)
            }
        )
    })
}
// 退出
export function logout(params) {
    return new Promise((resolve, reject) => {
        https.post('/user/logout', params).then(
            (res) => {
                let result = Object.assign(res, {})
                resolve({ status: !result.code, result })
            },
            (err) => {
                reject(err)
            }
        )
    })
}
// 用户注册
export function register(params) {
    return new Promise((resolve, reject) => {
        https.post('/user/register', params).then(
            (res) => {
                let result = Object.assign(res, {})
                resolve({ status: !result.code, result })
            },
            (err) => {
                reject(err)
            }
        )
    })
}
// 密码找回
export function returnPwd(params) {
    return new Promise((resolve, reject) => {
        https.post('/user/returnPwd', params).then(
            (res) => {
                let result = Object.assign(res, {})
                resolve({ status: !result.code, result })
            },
            (err) => {
                reject(err)
            }
        )
    })
}
// 修改资金密码
export function updateAmtPwd(params) {
    return new Promise((resolve, reject) => {
        https.post('/user/updateAmtPwd', params).then(
            (res) => {
                let result = Object.assign(res, {})
                resolve({ status: !result.code, result })
            },
            (err) => {
                reject(err)
            }
        )
    })
}
// 修改密码
export function updatePwd(params) {
    return new Promise((resolve, reject) => {
        https.post('/user/updatePwd', params).then(
            (res) => {
                let result = Object.assign(res, {})
                resolve({ status: !result.code, result })
            },
            (err) => {
                reject(err)
            }
        )
    })
}
// 手机或邮箱验证码登录接口
export function verifyLogin(params) {
    return new Promise((resolve, reject) => {
        https.post('/user/verifyLogin', params).then(
            (res) => {
                let result = Object.assign(res, {})
                resolve({ status: !result.code, result })
            },
            (err) => {
                reject(err)
            }
        )
    })
}
// 修改手机或邮箱
export function updateMobileOrEmail(params) {
    return new Promise((resolve, reject) => {
        https.post('/user/updateMobileOrEmail', params).then(
            (res) => {
                let result = Object.assign(res, {})
                resolve({ status: !result.code, result })
            },
            (err) => {
                reject(err)
            }
        )
    })
}
// 验证手机号或者邮箱
export function verifyMobileOrEmail(params) {
    return new Promise((resolve, reject) => {
        https.post('/user/verifyMobileOrEmail', params).then(
            (res) => {
                let result = Object.assign(res, {})
                resolve({ status: !result.code, result })
            },
            (err) => {
                reject(err)
            }
        )
    })
}
// 获取用户提醒信息
export function getUserRemind(params) {
    return new Promise((resolve, reject) => {
        https.post('/user/getUserRemind', params).then(
            (res) => {
                let result = Object.assign(res, {})
                resolve({ status: !result.code, result })
            },
            (err) => {
                reject(err)
            }
        )
    })
}
// 设置用户提醒信息
export function setUserRemind(params) {
    return new Promise((resolve, reject) => {
        https.post('/user/setUserRemind', params).then(
            (res) => {
                let result = Object.assign(res, {})
                resolve({ status: !result.code, result })
            },
            (err) => {
                reject(err)
            }
        )
    })
}
// 校验资金密码
export function verifyAmtPw(params) {
    return new Promise((resolve, reject) => {
        https.post('/user/verifyAmtPw', params).then(
            (res) => {
                let result = Object.assign(res, {})
                resolve({ status: !result.code, result })
            },
            (err) => {
                reject(err)
            }
        )
    })
}
// 校验用户是否存在
export function verifyUserExist(params) {
    return new Promise((resolve, reject) => {
        https.post('/user/verifyUserExist', params).then(
            (res) => {
                let result = Object.assign(res, {})
                resolve({ status: !result.code, result })
            },
            (err) => {
                reject(err)
            }
        )
    })
}
// 修改用户语言
export function updateLanguage(params) {
    return new Promise((resolve, reject) => {
        https.post('/user/updateLanguage', params).then(
            (res) => {
                let result = Object.assign(res, {})
                resolve({ status: !result.code, result })
            },
            (err) => {
                reject(err)
            }
        )
    })
}
// 获取邀请码
export function getInvitationInfo(params) {
    return new Promise((resolve, reject) => {
        https.post('/user/getInvitationInfo', params).then(
            (res) => {
                let result = Object.assign(res, {})
                resolve({ status: !result.code, result })
            },
            (err) => {
                reject(err)
            }
        )
    })
}
