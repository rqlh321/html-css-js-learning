import LocalDictionary from './dictionary/LocalDictionary.js';
import banners from './ui/banners.js';

generate_ui()
set_listeners()

function generate_ui() {
    const dictionary = new LocalDictionary();
    const elements = ["upsalle", "salle", "salle", "salle", "salle", "salle", "salle", "salle", "salle", "salle", "salle"];
    const generated_banners = banners(elements);
    document.getElementById("main_section_id").appendChild(generated_banners);
    document.getElementsByName("dictionary").forEach((element) => {
        element.textContent = dictionary.get(element.id);
    });
}

function set_listeners() {
    document.getElementById("target_button_id").addEventListener('click', () => {
        console.log('{ "link": "target_button" }');
    });
}
