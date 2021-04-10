import {convertSiteData} from '../../../utils/siteUtils'
import {DEFAULT_PARAMS} from "@/constants/defaultParams";
import * as types from './types'
import * as sitesApi from "@/api/sites";


export default {
    actions: {
        async fetchSites({ commit, state }, searchParams = DEFAULT_PARAMS()) {
            commit(types.UPDATE_CURRENT_PARAMS, searchParams)
            const sites = await sitesApi.getSites(state.currentParams)
            commit(types.UPDATE_SITES, sites)
        },
        async loadMoreSites({ commit, state }) {
            commit(types.PLUS_ONE_PAGE)
            const sites = await sitesApi.getSites(state.currentParams)
            commit(types.ADD_MORE_SITES, sites)
        },
        async fetchSiteById({ commit }, { siteId }) {
            const site = sitesApi.getSiteById(siteId)
            commit(types.UPDATE_CHOSEN_SITE, site)
        }
    },
    mutations: {
        [types.UPDATE_SITES](state, newSites) {
            state.sites = newSites
        },
        [types.ADD_MORE_SITES](state, newSites) {
            state.sites.push(...newSites)
        },
        [types.UPDATE_CHOSEN_SITE](state, newSite) {
            state.siteChosen = newSite
        },
        [types.UPDATE_CURRENT_PARAMS](state, searchParams) {
            state.currentParams = Object.assign(
                {},
                searchParams,
                { sorting: { field: searchParams.sorting.field, order: searchParams.sorting.order }}
                )
        },
        [types.PLUS_ONE_PAGE](state) {
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
