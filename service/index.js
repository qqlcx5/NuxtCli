import * as common from './modules/common' // 公共接口
import * as user from './modules/user' // 用户接口
// import * as verify from './modules/verify' // 验证接口
// import * as income from './modules/income' // 验证接口
// import * as banner from './modules/banner' // 横幅接口
// import * as orders from './modules/orders' // 订单接口
// import * as contract from './modules/contract' // 套餐接口
// import * as userassets from './modules/userassets' // 用户资产接口
// import * as electric from './modules/electric' // 用户资产接口
// import * as assets from './modules/assets' // 用户资产接口
// import * as withdraw from './modules/withdraw' // 用户资产接口
// import * as recharge from './modules/recharge' // 续约
// import * as coupon from './modules/coupon' // 优惠券相关接口
// import * as invitation from './modules/invitation' // 优惠券相关接口
// import * as quiz from './modules/quiz' // 竞猜记录相关接口

const request = {
    common,
    user,
    // verify,
    // orders,
    // income,
    // contract,
    // userassets,
    // electric,
    // banner,
    // assets,
    // recharge,
    // withdraw,
    // coupon,
    // invitation,
    // quiz,
}

export default (app, inject) => {
    inject('https', request)
}
