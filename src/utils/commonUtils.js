export function getSubtitleFromUrl(url) {
    if (url.includes('sites')) {
        return 'Sites'
    } else if (url.includes('clients')) {
        return 'Clients'
    } else if (url.includes('profile')) {
        return 'Profile'
    } else {
        return 'Home'
    }
}

export function getQueryFromSearchParams({ filter, sorting, page, limit }) {
    let query = '?'
    for (const queryPart of [getFilterQuery(filter), getSortingQuery(sorting), getPageLimitQuery(page, limit)]) {
        if (queryPart) {
            query += `&${queryPart}`
        }
    }
    return query
}

function getFilterQuery(filter) {
    return filter ? `q=${filter}` : ''
}

function getSortingQuery(sorting) {
    return sorting.field ? `_sort=${sorting.field}&_order=${sorting.order || 'asc'}` : ''
}

function getPageLimitQuery(page, limit) {
    return `_page=${page}&_limit=${limit}`
}
