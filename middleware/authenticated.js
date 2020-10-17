import { getToken } from '~/utils/auth'

export default function ({ store, redirect }) {
    // If the user is not authenticated
    const token = getToken()
    if (!token) {
        return redirect('/login')
    }
}
