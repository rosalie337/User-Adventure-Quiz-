// GET user date  and store it in local storage

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

// Render metadata to page
    // quest detail page (quest-page)
    // quest list page (map)
    // quest results page pulls from metadata

// Write meta data (data rendering)
// Render STATE to page
    //complete questions
    //user profile
    //results
