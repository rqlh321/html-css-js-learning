import LocalDictionary from './dictionary/LocalDictionary.js';
import banners from './ui/banners.js';

const elements = ["upsalle"];
const generated_banners = banners(elements);
document.getElementById("main_section_id").appendChild(generated_banners);

const dictionary = new LocalDictionary();
document.getElementsByName("dictionary").forEach(element => {
    element.textContent = dictionary.get(element.id);
});

document.getElementById("target_button_id").addEventListener('click', () => {
    console.log('{ "link": "test" }');
});
document.getElementById("upsalle_id").addEventListener('click', () => {
    console.log('{ "link": "upsalle" }');
});
