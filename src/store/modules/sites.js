import { serverUrl } from '../../config.json'
import {convertSiteData} from '../../utils/siteUtils'

export default {
    actions: {
        async fetchSites({ commit }) {
            const res = await fetch(`${serverUrl}/sites?_page=1&_limit=20`)
            const sites = await res.json()
            commit('getSites', sites)
        },
        async fetchSiteById({ commit }, { siteId }) {
            const res = await fetch(`${serverUrl}/sites/${siteId}`)
            const site = await res.json()
            commit('updateChosenSite', site)
        }
    },
    mutations: {
        getSites(state, newSites) {
            state.sites = newSites
        },
        updateSites(state, newSites) {
            state.sites.push(...newSites)
        },
        updateChosenSite(state, newSite) {
            state.siteChosen = newSite
        }
    },
    state: {
        sites: [],
        siteChosen: null
    },
    getters: {
        allSites({ sites }) {
            return sites.map(convertSiteData)
        },
        chosenSite({ siteChosen }) {
            if (!siteChosen) {
                return {}
            }
            return convertSiteData(siteChosen)
        }
    }
}
