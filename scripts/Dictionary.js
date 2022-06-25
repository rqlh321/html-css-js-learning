export default class Dictionary {

    #language;
    #russian_dictionary;
    #english_dictionary;

    constructor(language) {
        this.#language = language
        this.#russian_dictionary = new Map();
        this.#english_dictionary = new Map();

        this.#english_dictionary.set('title_id', 'Hello World!');
        this.#english_dictionary.set('content_id', 'The publishing house is embarking on an unusual undertaking - the publication of the 20th Century Diaries series.');
        this.#english_dictionary.set('target_button_id', 'Target action');

        this.#russian_dictionary.set('title_id', 'Привет Мир!');
        this.#russian_dictionary.set('content_id', 'Издательство приступает к необычному предприятию – изданию серии «Дневники XX века».');
        this.#russian_dictionary.set('target_button_id', 'Целевое действие');
    }

    text(key) {
        switch (this.#language) {
            case 'ru': return this.#russian_dictionary.get(key)
            case 'en': return this.#english_dictionary.get(key)
            default: return this.#russian_dictionary.get(key)
        }
    }

}
