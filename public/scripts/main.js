import Dictionary from './Dictionary.js';

let params = new URLSearchParams(window.location.search);
let language = params.get('language');
let dictionary = new Dictionary(language);

document.getElementById("target_button_id").addEventListener('click', () => {
    console.log('{ "link": "" }');
});
document.getElementsByName("dictionary").forEach(element => {
    element.textContent = dictionary.text(element.id);
});