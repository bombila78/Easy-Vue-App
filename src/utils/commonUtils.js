export function getSubtitleFormUrl(url) {
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
