import {serverUrl} from "@/config.json";

export async function getUser() {
    const res = await fetch(`${serverUrl}/me`)
    const user = await res.json()
    return user
}

export async function updateUser(userData) {
    const res = await fetch(`${serverUrl}/me`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    const updatedUser = await res.json()
    return updatedUser
}
