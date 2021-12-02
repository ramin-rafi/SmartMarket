// All Style file Import here
import "./sass/theme.scss";

// require('jquery');
// require('bootstrap');
// // require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
// require('fontawesome-4.7');

// All script file import here
import './js/script.js';


// Custom Funtion
function component() {
    const element = document.createElement("h1");

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(["Hello", "World!"], " ");

    return element;
}

document.body.appendChild(component());
