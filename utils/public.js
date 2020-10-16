import Decimal from 'decimal.js'
import moment from 'moment'
import store from '@/store'

// 科学计数法转数值 - 处理 1e-7 这类精度问题
export function getFullNum(num) {
    // 处理非数字
    if (isNaN(num)) {
        return num
    }
    // 处理不需要转换的数字
    const str = String(num)
    if (!/e/i.test(str)) {
        return num
    }
    return Number(num)
        .toFixed(18)
        .replace(/\.?0+$/, '')
}

// 返回小数位后几位 截取
// number 数值
// p 位数
export function toFixed(number, pp) {
    let num = isNaN(number) || !number ? 0 : number
    let p = isNaN(pp) || !pp ? 4 : pp
    num = getFullNum(num)
  var n = (num + '').split('.'); // eslint-disable-line
  var x = n.length > 1 ? n[1] : ''; // eslint-disable-line
    if (x.length > p) {
    // eslint-disable-line
    x = x.substr(0, p); // eslint-disable-line
    } else {
    // eslint-disable-line
    x += Array(p - x.length + 1).join('0'); // eslint-disable-line
  } // eslint-disable-line
  return n[0] + (x == '' ? '' : '.' + x); // eslint-disable-line
}

// 获取url参数
export function GetUrlPara() {
    const url = document.location.toString()
    const arrUrl = url.split('?')
    if (arrUrl.length === 1) {
        return {
            dapp: 'moreWallet',
        }
    }
    const para = arrUrl[1]
    const qureyArr = para.split('&')
    const params = {}
    for (let i = 0; i < qureyArr.length; i += 1) {
        const arr = qureyArr[i].split('=')
        params[arr[0]] = arr[1]
    }
    return params
}

/**
 *
 * 标准时间转化为 YYYY/MM/DD HH:mm:ss
 * @export moment.js
 * @param timestamp Object 或者 String
 * @returns Object 或者 String
 */
export function timestampToTime(timestamp, scheme) {
    if (scheme) {
        return moment(timestamp).format(scheme)
    }
    if (typeof timestamp === 'object') {
        timestamp.forEach((item, index) => {
            timestamp[index] = moment(item).format('YYYY-MM-DD HH:mm:ss')
        })
    } else {
        return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
    }
    return timestamp
}

// time 时间戳 p 截取位数
export function toLocalTime(time, p) {
    if (p) {
        return moment(time).format('YYYY-MM-DD HH:mm:ss').substr(0, p)
    }
    return moment(time).format('YYYY-MM-DD HH:mm:ss')
}

/*
 ** 加法函数，用来得到精确的加法结果
 ** 返回值：arg1 + arg2的精确结果 Number 型
 */
export function accAdd(arg1, arg2) {
    if ((!arg1 && arg1 !== 0) || (!arg2 && arg2 !== 0)) {
        return 0
    }
    return new Decimal(arg1).add(new Decimal(arg2)).toNumber()
}

/*
 ** 减法函数，用来得到精确的减法结果
 ** 返回值：arg1 - arg2的精确结果 Number 型
 */
export function accSub(arg1, arg2) {
    if ((!arg1 && arg1 !== 0) || (!arg2 && arg2 !== 0)) {
        return 0
    }
    return new Decimal(arg1).sub(new Decimal(arg2)).toNumber()
}

/*
 ** 乘法函数，用来得到精确的乘法结果
 ** 返回值：arg1 * arg2的精确结果 Number 型
 */
export function accMul(arg1, arg2) {
    if ((!arg1 && arg1 !== 0) || (!arg2 && arg2 !== 0)) {
        return 0
    }
    return new Decimal(arg1).mul(new Decimal(arg2)).toNumber()
}

/*
 ** 除法函数，用来得到精确的除法结果
 ** 返回值：arg1 / arg2的精确结果 Number 型
 */
export function accDiv(arg1, arg2) {
    if ((!arg1 && arg1 !== 0) || (!arg2 && arg2 !== 0)) {
        return 0
    }
    return new Decimal(arg1).div(new Decimal(arg2)).toNumber()
}

/*
 ** 向上取整
 ** 返回值：arg Number 型
 */
export function integer(arg) {
    if (!arg) {
        return 0
    }
    return Math.ceil(arg)
}

// 判断是否有数字
export function judgeNumber(number) {
    const args = Number(number)
    return Boolean(args)
}

/**
 * 深拷贝
 *
 * @export
 * @param {*} data 拷贝的数据
 * @returns
 */
export function deepClone(data) {
    const type = typeof data
    let obj
    if (type === 'array') {
        obj = []
    } else if (type === 'object') {
        obj = {}
    } else {
        return data
    }
    if (type === 'array') {
        for (let i = 0, len = data.length; i < len; i++) {
            obj.push(deepClone(data[i]))
        }
    } else if (type === 'object') {
        for (let key in data) {
            obj[key] = deepClone(data[key])
        }
    }
    return obj
}

// zendesk跳转
export function hrefZendesk(id, type) {
    const lang = store.state.app.language.toLowerCase()
    let newtype = 'articles'
    if (type) {
        newtype = type
    }
    let url = `https://weminer.zendesk.com/hc/en-us/${newtype}/${id}`
    if (lang !== 'en') {
        url = `https://weminer.zendesk.com/hc/${lang}/${newtype}/${id}`
    }
    window.location.href = url
}

// 错误提示忽略
export function errorCodeIgoner(code) {
    let status = true
    switch (code) {
        case 132:
            status = false
            break
    }
    return status
}

/**
 * 输入框限制输入的规则
 *
 * @export
 * @param {*} inputNum 传入的数字
 * @returns
 */
export function blurNumber(inputNum) {
    let num = Number(inputNum)
    if (num < 0) {
        return 0
    }
    return inputNum
}

/**
 * 保存优惠券信息
 *
 * @export
 * @param {*} result
 */
export function setCouponInfo(result) {
    if (result) {
        localStorage.setItem('isNewUser', true)
        localStorage.setItem('couponList', JSON.stringify(result))
    } else {
        localStorage.setItem('isNewUser', false)
        localStorage.setItem('couponList', null)
    }
}
