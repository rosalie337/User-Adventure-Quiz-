// Get user data and store it in local storage

export function saveUser(user) {
    const json = JSON.stringify(user);
    localStorage.setItem ('user', json);
}

export function retrieveUser() {
    const json = localStorage.getItem('user');
    if (!json) return null;
    const user = JSON.parse(json);
    return user;
}