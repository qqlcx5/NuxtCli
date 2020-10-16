import Vue from 'vue'
const contexts = require.context('.', false, /\.vue$/)
contexts.keys().forEach((fileName) => {
    const componentRegister = contexts(fileName).default
    // 使用内置的组件名称 进行全局组件注册
    Vue.component(componentRegister.name, componentRegister)
})
