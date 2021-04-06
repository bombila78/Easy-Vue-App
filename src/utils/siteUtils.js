export function convertSiteData(site) {
    const mainImage = site.images[0]
    const fullAddress = composeAddress(site.address)
    const mainContact = getFullNameFromContact(site.contacts.main)
    const mainContactJobTitle = site.contacts.main.jobTitle
    const mainContactPhone = site.contacts.main.phoneNumber
    const mainContactEmail = site.contacts.main.email
    const mainContactAddress = composeAddress(site.contacts.main.address)
    return {
        ...site,
        mainImage,
        fullAddress,
        mainContact,
        mainContactJobTitle,
        mainContactPhone,
        mainContactEmail,
        mainContactAddress
    }
}

function composeAddress(
    {
       zipCode = '',
       city = '',
       street = '',
       country = '',
       state = ''
    }) {
    return `${zipCode}, ${country}, ${state}, ${city}, ${street}`
}

function getFullNameFromContact({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}
