/** *
 *      ┌─┐       ┌─┐ + +
 *   ┌──┘ ┴───────┘ ┴──┐++
 *   │                 │
 *   │       ───       │++ + + +
 *   ███████───███████ │+
 *   │                 │+
 *   │       ─┴─       │
 *   │                 │
 *   └───┐         ┌───┘
 *       │         │
 *       │         │   + +
 *       │         │
 *       │         └──────────────┐
 *       │                        │
 *       │                        ├─┐
 *       │                        ┌─┘
 *       │                        │
 *       └─┐  ┐  ┌───────┬──┐  ┌──┘  + + + +
 *         │ ─┤ ─┤       │ ─┤ ─┤
 *         └──┴──┘       └──┴──┘  + + + +
 *                神兽保佑
 *               代码无BUG!
 */
/* 常见正则
 * 登录密码--由数字和字母组成，并且要同时含有数字和字母，且长度要在8-16位之间。
 * 数字--输入框类型校验
 * 短信验证码--目前6位数字
 * 手机号校验
 * 邮箱校验
 */
// 使用教程
// import { validateReg } from "~/plugins/validate.js";
// if(validateReg('password',value)){...}

export function validateReg(type, str) {
    let reg
    switch (type) {
        case 'email':
            reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
            break
        case 'moblie':
            reg = /^1[3456789]\d{9}$/
            break
        case 'number':
            reg = /^[0-9]*$/
            break
        case 'password':
            reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
            break
        case 'verify':
            reg = /^\d{6}$/
            break
        default:
            reg = type
            break
    }
    if (!reg) return false
    return reg.test(str)
}
