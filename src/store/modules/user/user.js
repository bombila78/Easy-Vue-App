import { serverUrl } from '../../../config.json'
import * as types from './types'

export default {
    actions: {
        async fetchUser({ commit }) {
            const res = await fetch(`${serverUrl}/me`)
            const user = await res.json()
            commit(types.UPDATE_USER, user)
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
            commit(types.UPDATE_USER, updateUser)
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
