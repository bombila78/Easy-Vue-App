import {serverUrl} from "@/config.json";
import {getQueryFromSearchParams} from "@/utils/commonUtils";

export async function getSites(searchParams) {
    const res = await fetch(`${serverUrl}/sites${getQueryFromSearchParams(searchParams)}`)
    const sites = await res.json()
    return sites
}

export async function getSiteById(siteId) {
    const res = await fetch(`${serverUrl}/sites/${siteId}`)
    const site = await res.json()
    return site
}
