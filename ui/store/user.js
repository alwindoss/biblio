export const state = () => {
    isLoggedIn: false
}

export const mutations = {
    UPDATE_LOGIN_STATUS(state, status) {
        state.isLoggedIn = status
    }
}

export const actions = {
    login(context, {data}) {
        console.log('In the store action and the data received is: ' + data)
        context.commit('UPDATE_LOGIN_STATUS', true)
    },
    logout(context) {
        context.commit('UPDATE_LOGIN_STATUS', false)
    }
}

export const getters = {
    isLoggedIn(state) {
        return state.isLoggedIn
    }
}