import Vue from 'vue'
import Vuex from 'vuex'

import sites from "@/store/modules/sites";
import user from "@/store/modules/user";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        sites,
        user
    }
})
