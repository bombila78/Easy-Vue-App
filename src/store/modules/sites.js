import { serverUrl } from '../../config.json'
import {convertSiteData} from '../../utils/siteUtils'
import {getQueryFromSearchParams} from "@/utils/commonUtils";
import {DEFAULT_PARAMS} from "@/constants/defaultParams";


export default {
    actions: {
        async fetchSites({ commit, state }, searchParams = DEFAULT_PARAMS()) {
            commit('updateCurrentParams', searchParams)
            const res = await fetch(`${serverUrl}/sites${getQueryFromSearchParams(state.currentParams)}`)
            const sites = await res.json()
            commit('getSites', sites)
        },
        async loadMoreSites({ commit, state }) {
            commit('plusOnePage')
            const res = await fetch(`${serverUrl}/sites${getQueryFromSearchParams(state.currentParams)}`)
            const sites = await res.json()
            commit('updateSites', sites)
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
        },
        updateCurrentParams(state, searchParams) {
            state.currentParams = Object.assign(
                {},
                searchParams,
                { sorting: { field: searchParams.sorting.field, order: searchParams.sorting.order }}
                )
        },
        plusOnePage(state) {
            state.currentParams.page++
        }
    },
    state: {
        sites: [],
        siteChosen: null,
        currentParams: DEFAULT_PARAMS()
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
