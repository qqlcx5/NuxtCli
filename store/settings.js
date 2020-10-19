const state = () => ({
    theme: 'default',
})

const mutations = {
    CHANGED_THEME: (state, theme) => {
        state.theme = theme
    },
}

const actions = {
    changedTheme({ commit }, data) {
        commit('CHANGED_THEME', data)
    },
}

export default {
    state,
    mutations,
    actions,
}
