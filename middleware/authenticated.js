const demo = {
    state: '',
}
export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (!demo.state.authenticated) {
        return redirect('/login')
    }
}
