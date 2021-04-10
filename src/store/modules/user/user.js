import * as types from './types'
import * as userApi from '../../../api/user'

export default {
    actions: {
        async fetchUser({ commit }) {
            const user = await userApi.getUser()
            commit(types.UPDATE_USER, user)
        },
        async updateUser({ commit }, userData) {
            const updatedUser = await userApi.updateUser(userData)
            commit(types.UPDATE_USER, updatedUser)
        }
    },
    mutations: {
        [types.UPDATE_USER](state, newUser) {
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
