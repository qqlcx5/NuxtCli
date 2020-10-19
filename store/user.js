import { setToken, removeToken } from '~/utils/auth'

const state = () => {
    return {
        token: '',
        name: '',
        avatar:
            'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        departmentInfo: {},
        userPageList: {
            data: [],
            pageSize: null,
            totalCount: null,
            totalPage: null,
        },
    }
}
const DefaultState = {
    token: '',
    name: '',
    avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    departmentInfo: {},
    userPageList: {
        data: [],
        pageSize: null,
        totalCount: null,
        totalPage: null,
    },
}

const mutations = {
    RESET_STATE: (state) => {
        Object.assign(state, DefaultState)
    },
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    },
    SET_USERINFO: (state, userInfo) => {
        state.userInfo = userInfo
    },
    SET_USERPAGELIST: (state, userPageList) => {
        state.userPageList = userPageList
    },
}

const actions = {
    login({ commit }, userInfo) {
        return new Promise((resolve, reject) => {
            const { username, password } = userInfo
            this.$https.user
                .login({ username: username.trim(), password, delta: '1' })
                .then((res) => {
                    commit('SET_TOKEN', res.data)
                    setToken(res.data)
                    resolve(res)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    // get user info
    async getInfo({ commit }) {
        const { status, result } = await this.$https.user.getUserProfile()
        if (status) {
            commit('SET_USERINFO', result.data)
            // commit('SET_AVATAR', result.data.avatar)
        }
        // return new Promise((resolve, reject) => {
        // getDepartmentInfo(state.token)
        //     .then((response) => {
        // csonst { data } = response
        //         console.log('getDepartmentInfo', response)
        //         const { name, avatar } = data
        //         commit('SET_NAME', name)
        //         commit('SET_AVATAR', avatar)
        //         resolve(data)
        //     })
        //     .catch((error) => {
        //         reject(error)
        //     })
        // })
    },

    // user logout
    logout({ commit, state }) {
        return new Promise((resolve, reject) => {
            removeToken() // must remove  token  first
            commit('RESET_STATE')
            resolve()
        }).catch((error) => {
            reject(error)
        })
    },
}

export default {
    state,
    mutations,
    actions,
}
