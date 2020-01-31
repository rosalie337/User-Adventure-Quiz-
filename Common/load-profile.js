import { getUser } from '../data/app.js';
import isImmobile from './is-dead.js';

function loadProfile() {
    // reference needed DOM elements //
    const name = document.getElementById('name');
    //const avatar = document.getElementById('avatar');//
    const health = document.getElementById('health');
    const wealth = document.getElementById('money');

    //initialize: load and parse json with user from local storage //
    const user = getUser();

    // if there's no user
    if (!user) {
        // no user? go back to sign up:
        window.location = './';
    }

    // copy data from object to DOM properties:
    name.textContent = user.name;
    //avatar.src = '../assets/avatars/' + user.race + '.png';//
    wealth.textContent = user.wealth;

    // if they're immobile, tell user in the header//
    if (isImmobile(user)) {
        health.textContent = 'Economically Immobile';
    }
    else {
        // otherwise show the user health
        health.textContent = user.health;
    }

}

export default loadProfile;