import { serverUrl } from '../../config.json'

export default {
    actions: {
        async fetchUser({ commit }) {
            const res = await fetch(`${serverUrl}/me`)
            const user = await res.json()
            commit('updateUser', user)
        },
        async updateUser({ commit }, userData) {
            const res = await fetch(`${serverUrl}/me`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
            const updateUser = await res.json()
            commit('updateUser', updateUser)
        }
    },
    mutations: {
        updateUser(state, newUser) {
            state.user = newUser
        }
    },
    state: {
        user: {}
    },
    getters: {
        user({ user }) {
            return user
        }
    }
}
