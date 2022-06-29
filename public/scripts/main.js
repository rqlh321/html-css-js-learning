import Dictionary from './Dictionary.js';
import banners from './setup_banners.js';

document.getElementById("main_section_id").appendChild(banners());

const params = new URLSearchParams(window.location.search);
const language = params.get("language");
const dictionary = new Dictionary(language);

document.getElementById("target_button_id").addEventListener('click', () => {
    console.log('{ "link": "test" }');
});
document.getElementById("upsalle_id").addEventListener('click', () => {
    console.log('{ "link": "upsalle" }');
});
document.getElementsByName("dictionary").forEach(element => {
    element.textContent = dictionary.text(element.id);
});